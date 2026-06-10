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

  /** 创建漏斗锅体碰撞体（多段壁面近似圆柱 + 平面底部）
   *  原方案用4面Box墙，对角线缝隙大，球容易飞出
   *  改用16段倾斜Box拼接近似圆形漏斗，向上延伸2单位防止颠锅飞出
   */
  createPotCollider() {
    // 底部碰撞体 - 无限平面，确保小球不会从底部漏出
    const bottomBody = new CANNON.Body({ mass: 0 });
    bottomBody.addShape(new CANNON.Plane());
    bottomBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
    bottomBody.position.set(0, -2, 0);
    this.world.addBody(bottomBody);

    // 漏斗侧壁参数
    const segments = 16;             // 壁面段数，越多越圆滑
    const bottomRadius = 3;          // 锅底半径
    const topRadius = 5;             // 锅口半径（与可视模型一致）
    const funnelHeight = 4;          // 漏斗高度：y=-2 到 y=2
    const extraHeight = 2;           // 向上延伸到 y=4，防止颠锅飞出

    // 计算延伸后的顶部半径（保持相同斜率）
    const slope = (topRadius - bottomRadius) / funnelHeight; // 0.5
    const extendedTopRadius = topRadius + slope * extraHeight; // 6
    const totalHeight = funnelHeight + extraHeight; // 6
    const midRadius = (bottomRadius + extendedTopRadius) / 2; // 4.5
    const midY = -2 + totalHeight / 2; // 1
    const tiltAngle = Math.atan2(extendedTopRadius - bottomRadius, totalHeight); // ≈0.4636 rad
    const slantHeight = Math.sqrt(totalHeight ** 2 + (extendedTopRadius - bottomRadius) ** 2);
    const segWidth = 2 * midRadius * Math.sin(Math.PI / segments) + 0.2; // 加宽0.2防段间缝隙
    const wallThickness = 0.3;

    for (let i = 0; i < segments; i++) {
      const theta = (2 * Math.PI * i) / segments;
      const wallBody = new CANNON.Body({ mass: 0 });
      const wallShape = new CANNON.Box(
        new CANNON.Vec3(segWidth / 2, slantHeight / 2, wallThickness / 2),
      );
      wallBody.addShape(wallShape);

      // 位置：在圆周上，y对齐漏斗中点
      wallBody.position.set(
        midRadius * Math.sin(theta),
        midY,
        midRadius * Math.cos(theta),
      );

      // 旋转：先绕Y轴旋转到对应角度，再绕局部X轴外倾（形成漏斗）
      const qY = new CANNON.Quaternion();
      qY.setFromAxisAngle(new CANNON.Vec3(0, 1, 0), theta);
      const qTilt = new CANNON.Quaternion();
      qTilt.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), tiltAngle);
      wallBody.quaternion = qY.mult(qTilt);

      this.world.addBody(wallBody);
    }
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
    // 启用CCD（连续碰撞检测），防止高速穿透薄壁
    body.ccdSpeedThreshold = 0.5;
    body.ccdIterations = 10;
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

  /** 安全边界检查：将跑出锅外的球强制拉回锅内 */
  clampBodies() {
    const maxDist = 5; // 最大水平距离
    const minY = -3; // 最低Y
    const maxY = 10; // 最高Y（允许颠锅时弹起）

    this.bodies.forEach(({ body }) => {
      const dist = Math.sqrt(body.position.x ** 2 + body.position.z ** 2);
      if (dist > maxDist || body.position.y < minY || body.position.y > maxY) {
        body.position.set((Math.random() - 0.5) * 2, 3, (Math.random() - 0.5) * 2);
        body.velocity.set(0, 0, 0);
        body.angularVelocity.set(0, 0, 0);
      }
    });
  }
}
