import * as THREE from 'three';

/** 食材颜色映射表 - 不同itemKey对应不同颜色的球体 */
const ITEM_COLORS: Record<string, number> = {
  apple: 0xff4444,
  banana: 0xffcc00,
  orange: 0xff8800,
  grape: 0x8844cc,
  peach: 0xffaa88,
};

/**
 * 食材对象池
 * 复用SphereGeometry和Mesh实例，优化GC性能
 * 预创建一定数量的球体，动态扩容，回收时不销毁而是缓存复用
 */
export class ItemPool {
  private pool: THREE.Mesh[] = [];       // 空闲对象池
  private active: Map<THREE.Mesh, string> = new Map(); // 活跃对象：mesh -> itemKey
  private geo: THREE.SphereGeometry;     // 共享球体几何体

  constructor(preSize = 20) {
    // 共享几何体，所有球体复用
    this.geo = new THREE.SphereGeometry(0.35, 16, 16);

    // 预创建对象
    for (let i = 0; i < preSize; i++) {
      const mesh = this.createMesh();
      mesh.visible = false;
      this.pool.push(mesh);
    }
  }

  /** 创建一个球体Mesh */
  private createMesh(): THREE.Mesh {
    const mat = new THREE.MeshStandardMaterial({ roughness: 0.4, metalness: 0.1 });
    const mesh = new THREE.Mesh(this.geo, mat);
    mesh.userData.isFoodItem = true; // 标记为食材，用于Raycaster拾取
    return mesh;
  }

  /** 从对象池获取一个球体，设置itemKey颜色 */
  acquire(itemKey: string): THREE.Mesh {
    let mesh: THREE.Mesh;
    if (this.pool.length > 0) {
      // 从池中取出空闲对象
      mesh = this.pool.pop()!;
    } else {
      // 池空，动态扩容创建新对象
      mesh = this.createMesh();
    }
    // 设置颜色
    const color = ITEM_COLORS[itemKey] || 0xaaaaaa;
    (mesh.material as THREE.MeshStandardMaterial).color.setHex(color);
    mesh.visible = true;
    this.active.set(mesh, itemKey);
    return mesh;
  }

  /** 回收球体到对象池（食材被消除或丢回锅内时调用） */
  release(mesh: THREE.Mesh) {
    mesh.visible = false;
    mesh.position.set(0, -100, 0); // 移出视野
    this.active.delete(mesh);
    this.pool.push(mesh);
  }

  /** 获取活跃对象的itemKey */
  getItemKey(mesh: THREE.Mesh): string | undefined {
    return this.active.get(mesh);
  }

  /** 获取所有活跃对象 */
  getActiveMeshes(): THREE.Mesh[] {
    return Array.from(this.active.keys());
  }

  /** 获取当前活跃对象数量 */
  get activeCount(): number {
    return this.active.size;
  }

  /** 释放所有资源 */
  dispose() {
    this.geo.dispose();
    this.pool.forEach((m) => (m.material as THREE.Material).dispose());
    this.active.forEach((_, m) => (m.material as THREE.Material).dispose());
    this.pool = [];
    this.active.clear();
  }
}
