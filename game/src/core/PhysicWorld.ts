import * as CANNON from 'cannon-es';

/**
 * Cannon-es 物理世界封装
 * 包含：物理世界创建、重力设置、刚体管理、坐标同步
 */
export class PhysicWorld {
  world: CANNON.World;
  private bodies: { body: CANNON.Body; mesh: any }[] = [];

  constructor() {
    // 创建物理世界
    this.world = new CANNON.World();
    this.world.gravity.set(0, -15, 0); // 全局重力，稍大于真实值使食材堆叠更自然
    this.world.broadphase = new CANNON.NaiveBroadphase();
    (this.world.solver as CANNON.GSSolver).iterations = 10;

    // 设置默认接触材料参数
    const defaultMaterial = new CANNON.Material('default');
    const contactMaterial = new CANNON.ContactMaterial(defaultMaterial, defaultMaterial, {
      friction: 0.5,
      restitution: 0.3, // 弹性系数
    });
    this.world.addContactMaterial(contactMaterial);
    this.world.defaultContactMaterial = contactMaterial;
  }

  /** 创建漏斗锅体碰撞体（底部+四周侧壁） */
  createPotCollider() {
    // 底部碰撞体 - 平面
    const bottomBody = new CANNON.Body({ mass: 0 }); // mass=0 静态体
    const bottomShape = new CANNON.Box(new CANNON.Vec3(3, 0.1, 3));
    bottomBody.addShape(bottomShape);
    bottomBody.position.set(0, -2.1, 0);
    this.world.addBody(bottomBody);

    // 四周侧壁 - 用4个倾斜的Box静态刚体拼接
    const wallThickness = 0.3;
    const wallHeight = 4;
    const wallData = [
      { pos: [0, 0, 4], rot: [0.3, 0, 0] },   // 前壁
      { pos: [0, 0, -4], rot: [-0.3, 0, 0] },  // 后壁
      { pos: [4, 0, 0], rot: [0, 0, -0.3] },   // 右壁
      { pos: [-4, 0, 0], rot: [0, 0, 0.3] },   // 左壁
    ];

    wallData.forEach((w) => {
      const wallBody = new CANNON.Body({ mass: 0 });
      const wallShape = new CANNON.Box(new CANNON.Vec3(5, wallHeight / 2, wallThickness));
      wallBody.addShape(wallShape);
      wallBody.position.set(w.pos[0], w.pos[1], w.pos[2]);
      wallBody.quaternion.setFromEuler(w.rot[0], w.rot[1], w.rot[2]);
      this.world.addBody(wallBody);
    });
  }

  /** 创建球形食材刚体 */
  createSphereBody(x: number, y: number, z: number): CANNON.Body {
    const radius = 0.35;
    const body = new CANNON.Body({
      mass: 1,
      shape: new CANNON.Sphere(radius),
      position: new CANNON.Vec3(x, y, z),
      linearDamping: 0.3, // 线性阻尼，减少滑动
      angularDamping: 0.5, // 角阻尼，减少旋转
    });
    this.world.addBody(body);
    return body;
  }

  /** 注册刚体与Three.js Mesh的关联，用于每帧同步坐标 */
  registerBody(body: CANNON.Body, mesh: any) {
    this.bodies.push({ body, mesh });
  }

  /** 取消注册刚体与Mesh的关联（食材被拾取时调用） */
  unregisterBody(body: CANNON.Body) {
    const idx = this.bodies.findIndex((b) => b.body === body);
    if (idx >= 0) {
      this.bodies.splice(idx, 1);
    }
    this.world.removeBody(body);
  }

  /** 物理步进 - 每帧调用 */
  step(dt: number = 1 / 60) {
    this.world.step(dt);
  }

  /** 同步所有刚体坐标到Three.js渲染模型 */
  syncBodies() {
    this.bodies.forEach(({ body, mesh }) => {
      mesh.position.copy(body.position as any);
      mesh.quaternion.copy(body.quaternion as any);
    });
  }

  /** 给场景内所有食材刚体施加全局瞬时冲量（颠锅效果） */
  applyImpulseToAll(impulse: CANNON.Vec3) {
    this.bodies.forEach(({ body }) => {
      body.applyImpulse(impulse, body.position);
    });
  }

  /** 获取所有已注册的刚体-网格对 */
  getRegisteredBodies() {
    return this.bodies;
  }
}
