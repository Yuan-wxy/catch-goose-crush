import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

/**
 * Three.js 3D场景初始化封装
 * 包含：场景、透视相机、平行光、环境光、渲染器
 */
export class ThreeEnv {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  private animFns: (() => void)[] = [];
  potGroup: THREE.Group | null = null; // 锅体Group引用

  constructor(container: HTMLElement) {
    const w = container.clientWidth;
    const h = container.clientHeight;

    // 场景
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x1a1a2e);

    // 透视相机 - 从上方角度俯看锅体
    this.camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 100);
    this.camera.position.set(0, 12, 10);
    this.camera.lookAt(0, 0, 0);

    // 平行光 - 模拟太阳光
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(5, 15, 8);
    dirLight.castShadow = true;
    this.scene.add(dirLight);

    // 环境光 - 补光
    const ambLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambLight);

    // 渲染器
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(w, h);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    container.appendChild(this.renderer.domElement);

    // 窗口大小自适应
    window.addEventListener('resize', () => this.onResize(container));

    // 启动渲染循环
    this.animate();
  }

  /** 添加每帧执行函数 */
  addAnimFn(fn: () => void) {
    this.animFns.push(fn);
  }

  /** 创建锅体 - 优先使用GLB模型，回退到几何体 */
  async createPot(): Promise<THREE.Group> {
    return new Promise((resolve) => {
      const loader = new GLTFLoader();
      
      loader.load(
        '/models/wok.glb',
        (gltf) => {
          console.log('锅体GLB模型加载成功');
          const potGroup = gltf.scene;
          
          // 调整锅体位置（物理碰撞体：锅底y=-2，锅口y=2）
          potGroup.position.y = 0;
          
          // 根据模型尺寸调整缩放，使模型与物理碰撞体匹配
          // 物理碰撞体参数：锅底半径3，锅口半径5，高度4
          const box = new THREE.Box3().setFromObject(potGroup);
          const size = box.getSize(new THREE.Vector3());
          const maxDim = Math.max(size.x, size.y, size.z);
          
          // 目标尺寸：直径10（半径5），高度4
          const targetMaxDim = 10;
          const scale = targetMaxDim / maxDim;
          potGroup.scale.set(scale, scale, scale);
          
          console.log(`锅体模型缩放: ${scale.toFixed(2)}`);
          
          // 标记为锅体
          potGroup.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;
            }
          });
          
          this.scene.add(potGroup);
          this.potGroup = potGroup;
          console.log('锅体已添加到场景');
          resolve(potGroup);
        },
        undefined,
        (error) => {
          console.warn('锅体GLB模型加载失败，使用几何体替代:', error);
          // 回退到几何体创建
          const potGroup = this.createFallbackPot();
          this.potGroup = potGroup;
          resolve(potGroup);
        }
      );
    });
  }

  /** 创建fallback几何体锅体 */
  private createFallbackPot(): THREE.Group {
    const potGroup = new THREE.Group();

    // 锅体外壁 - 上大下小的漏斗形
    const potGeo = new THREE.CylinderGeometry(5, 3, 4, 32, 1, true);
    const potMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      roughness: 0.3,
      metalness: 0.1,
    });
    const potMesh = new THREE.Mesh(potGeo, potMat);
    potMesh.position.y = 0;
    potGroup.add(potMesh);

    // 锅底
    const bottomGeo = new THREE.CircleGeometry(3, 32);
    const bottomMat = new THREE.MeshStandardMaterial({ color: 0xeeeeee, side: THREE.DoubleSide });
    const bottomMesh = new THREE.Mesh(bottomGeo, bottomMat);
    bottomMesh.rotation.x = -Math.PI / 2;
    bottomMesh.position.y = -2;
    potGroup.add(bottomMesh);

    // 锅沿（上沿装饰环）
    const rimGeo = new THREE.TorusGeometry(5, 0.15, 8, 32);
    const rimMat = new THREE.MeshStandardMaterial({ color: 0xcccccc, metalness: 0.6 });
    const rimMesh = new THREE.Mesh(rimGeo, rimMat);
    rimMesh.rotation.x = Math.PI / 2;
    rimMesh.position.y = 2;
    potGroup.add(rimMesh);

    this.scene.add(potGroup);
    return potGroup;
  }

  /** 渲染循环 */
  private animate() {
    requestAnimationFrame(() => this.animate());
    // 执行所有注册的帧函数
    this.animFns.forEach((fn) => fn());
    this.renderer.render(this.scene, this.camera);
  }

  /** 窗口大小变化自适应 */
  private onResize(container: HTMLElement) {
    const w = container.clientWidth;
    const h = container.clientHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
  }

  /** 销毁场景，释放资源 */
  dispose() {
    this.renderer.dispose();
    this.scene.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        obj.geometry.dispose();
        if (Array.isArray(obj.material)) {
          obj.material.forEach((m) => m.dispose());
        } else {
          obj.material.dispose();
        }
      }
    });
  }
}
