import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

/** 食材颜色映射表 - 不同itemKey对应不同颜色的球体（作为fallback） */
const ITEM_COLORS: Record<string, number> = {
  apple: 0xff4444,
  banana: 0xffcc00,
  orange: 0xff8800,
  grape: 0x8844cc,
  peach: 0xffaa88,
};

/** GLB模型路径映射 */
const MODEL_PATHS: Record<string, string> = {
  apple: '/models/apple.glb',
  banana: '/models/banana.glb',
  orange: '/models/orange.glb',
  grape: '/models/grape.glb',
  peach: '/models/peach.glb',
};

/**
 * 食材对象池
 * 复用Mesh实例，支持GLB模型和球体fallback
 */
export class ItemPool {
  private pool: THREE.Mesh[] = [];       // 空闲对象池
  private active: Map<THREE.Mesh, string> = new Map(); // 活跃对象：mesh -> itemKey
  private geo: THREE.SphereGeometry;     // 共享球体几何体（fallback）
  private modelTemplates: Map<string, THREE.Mesh> = new Map(); // 缓存加载的GLB模型模板
  private isLoaded: boolean = false;     // 模型是否已加载完成
  private onLoaded?: () => void;         // 加载完成回调
  private scene?: THREE.Scene;           // 场景引用，用于替换模型时添加/移除对象
  private onModelReplaced?: (oldMesh: THREE.Mesh, newMesh: THREE.Mesh) => void; // 模型替换回调

  constructor(preSize = 20, onLoaded?: () => void, scene?: THREE.Scene, onModelReplaced?: (oldMesh: THREE.Mesh, newMesh: THREE.Mesh) => void) {
    // 保存场景引用
    this.scene = scene;
    // 保存加载完成回调
    this.onLoaded = onLoaded;
    // 保存模型替换回调（用于更新物理世界关联）
    this.onModelReplaced = onModelReplaced;
    
    // 共享几何体，所有球体复用（作为fallback）
    this.geo = new THREE.SphereGeometry(0.35, 16, 16);

    // 预加载GLB模型
    this.preloadModels();

    // 预创建fallback球体对象
    for (let i = 0; i < preSize; i++) {
      const mesh = this.createFallbackMesh();
      mesh.visible = false;
      this.pool.push(mesh);
    }
  }

  /** 预加载GLB模型 */
  private preloadModels() {
    const loader = new GLTFLoader();
    let loadedCount = 0;
    const totalCount = Object.keys(MODEL_PATHS).length;
    
    console.log(`开始预加载GLB模型，共 ${totalCount} 个`);
    
    for (const [itemKey, path] of Object.entries(MODEL_PATHS)) {
      console.log(`正在加载模型: ${itemKey} -> ${path}`);
      
      loader.load(path, (gltf) => {
        console.log(`模型 ${itemKey} 加载成功`);
        
        // 找到模型中的所有Mesh
        const meshes: THREE.Mesh[] = [];
        gltf.scene.traverse((obj) => {
          if (obj instanceof THREE.Mesh) {
            meshes.push(obj);
          }
        });
        
        console.log(`模型 ${itemKey} 包含 ${meshes.length} 个Mesh`);
        
        if (meshes.length > 0) {
          // 使用第一个Mesh作为模板
          const modelMesh = meshes[0];
          
          // 调整模型大小，根据水果类型设置不同的目标尺寸
          const box = new THREE.Box3().setFromObject(modelMesh);
          const size = box.getSize(new THREE.Vector3());
          console.log(`模型 ${itemKey} 原始尺寸: x=${size.x.toFixed(2)}, y=${size.y.toFixed(2)}, z=${size.z.toFixed(2)}`);
          
          // 根据水果类型设置目标尺寸
          // 葡萄和香蕉目标维度为3，其他水果为2
          const targetSize = ['grape', 'banana'].includes(itemKey) ? 3 : 2;
          
          // 根据模型大小调整缩放
          const maxDim = Math.max(size.x, size.y, size.z);
          const scale = targetSize / maxDim;
          console.log(`模型 ${itemKey} 缩放比例: ${scale.toFixed(2)} (目标尺寸: ${targetSize})`);
          modelMesh.scale.set(scale, scale, scale);
          
          // 标记为食材
          modelMesh.userData.isFoodItem = true;
          // 缓存模板
          this.modelTemplates.set(itemKey, modelMesh);
          
          console.log(`模型 ${itemKey} 已缓存`);
        } else {
          console.warn(`模型 ${itemKey} 不包含Mesh`);
        }
        
        // 检查是否所有模型都加载完成
        loadedCount++;
        if (loadedCount === totalCount) {
          this.isLoaded = true;
          console.log('所有GLB模型加载完成');
          
          // 如果有活跃的fallback球体，自动替换为GLB模型
          this.replaceFallbackWithModel();
          
          // 调用加载完成回调
          if (this.onLoaded) {
            this.onLoaded();
          }
        }
      }, undefined, (error) => {
        console.error(`加载模型 ${path} 失败:`, error);
        
        // 即使加载失败也要计数，避免卡住
        loadedCount++;
        if (loadedCount === totalCount) {
          this.isLoaded = true;
          if (this.onLoaded) {
            this.onLoaded();
          }
        }
      });
    }
  }

  /** 将活跃的fallback球体替换为GLB模型 */
  private replaceFallbackWithModel() {
    try {
      console.log('开始替换fallback球体为GLB模型');
      
      if (!this.scene) {
        console.warn('没有场景引用，无法替换模型');
        return;
      }
      
      const replacements: Array<{oldMesh: THREE.Mesh, newMesh: THREE.Mesh, itemKey: string}> = [];
      
      // 收集需要替换的球体
      this.active.forEach((itemKey, mesh) => {
        try {
          // 检查是否是fallback球体且有对应的GLB模型
          if (mesh.geometry === this.geo && this.modelTemplates.has(itemKey)) {
            const template = this.modelTemplates.get(itemKey)!;
            const newMesh = template.clone();
            if (newMesh.material) {
              newMesh.material = newMesh.material.clone();
            }
            
            // 复制位置和旋转（不复制缩放，使用模板的缩放）
            newMesh.position.copy(mesh.position);
            newMesh.rotation.copy(mesh.rotation);
            // 不复制缩放，模板已经被正确缩放
            
            replacements.push({ oldMesh: mesh, newMesh, itemKey });
          }
        } catch (e) {
          console.error(`收集替换项时出错:`, e);
        }
      });
      
      console.log(`找到 ${replacements.length} 个需要替换的fallback球体`);
      
      // 执行替换
      for (const { oldMesh, newMesh, itemKey } of replacements) {
        try {
          // 从场景中移除旧球体
          if (oldMesh.parent) {
            this.scene!.remove(oldMesh);
          }
          
          // 将新模型添加到场景
          this.scene!.add(newMesh);
          
          // 通知外部（物理世界）更新mesh关联
          if (this.onModelReplaced) {
            this.onModelReplaced(oldMesh, newMesh);
          }
          
          // 更新active映射
          this.active.delete(oldMesh);
          this.active.set(newMesh, itemKey);
          
          // 标记新模型为可见
          newMesh.visible = true;
          
          // 释放旧球体到对象池
          oldMesh.visible = false;
          oldMesh.position.set(0, -100, 0);
          this.pool.push(oldMesh);
          
          console.log(`替换 ${itemKey} 为GLB模型完成`);
        } catch (e) {
          console.error(`替换 ${itemKey} 时出错:`, e);
        }
      }
      
      console.log('替换完成');
    } catch (e) {
      console.error('替换模型时发生严重错误:', e);
    }
  }

  /** 创建fallback球体Mesh */
  private createFallbackMesh(): THREE.Mesh {
    const mat = new THREE.MeshStandardMaterial({ roughness: 0.4, metalness: 0.1 });
    const mesh = new THREE.Mesh(this.geo, mat);
    mesh.userData.isFoodItem = true;
    return mesh;
  }

  /** 从对象池获取一个食材Mesh */
  acquire(itemKey: string): THREE.Mesh {
    let mesh: THREE.Mesh;
    
    // 尝试使用GLB模型
    const template = this.modelTemplates.get(itemKey);
    if (template) {
      console.log(`acquire: 使用GLB模型 ${itemKey}`);
      // 克隆模型
      mesh = template.clone();
      // 克隆材质以支持独立的材质属性
      if (mesh.material) {
        mesh.material = mesh.material.clone();
      }
    } else {
      console.log(`acquire: 使用fallback球体 ${itemKey}`);
      // 使用fallback球体
      if (this.pool.length > 0) {
        mesh = this.pool.pop()!;
      } else {
        mesh = this.createFallbackMesh();
      }
      // 设置颜色
      const color = ITEM_COLORS[itemKey] || 0xaaaaaa;
      (mesh.material as THREE.MeshStandardMaterial).color.setHex(color);
    }
    
    mesh.visible = true;
    this.active.set(mesh, itemKey);
    return mesh;
  }

  /** 回收食材到对象池（食材被消除或丢回锅内时调用） */
  release(mesh: THREE.Mesh) {
    mesh.visible = false;
    mesh.position.set(0, -100, 0); // 移出视野
    this.active.delete(mesh);
    
    // 检查是否是fallback球体（使用共享几何体）
    const isFallback = mesh.geometry === this.geo;
    
    if (isFallback) {
      // fallback球体放入对象池复用
      this.pool.push(mesh);
    } else {
      // GLB模型直接销毁（因为是克隆出来的，不需要复用）
      if (mesh.geometry) {
        mesh.geometry.dispose();
      }
      if (mesh.material) {
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach((m) => m.dispose());
        } else {
          mesh.material.dispose();
        }
      }
    }
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
    // 释放共享几何体
    this.geo.dispose();
    
    // 释放fallback球体材质
    this.pool.forEach((m) => {
      if (m.material) {
        if (Array.isArray(m.material)) {
          m.material.forEach((mat) => mat.dispose());
        } else {
          (m.material as THREE.Material).dispose();
        }
      }
    });
    
    // 释放活跃对象材质
    this.active.forEach((_, m) => {
      if (m.material) {
        if (Array.isArray(m.material)) {
          m.material.forEach((mat) => mat.dispose());
        } else {
          (m.material as THREE.Material).dispose();
        }
      }
    });
    
    // 释放GLB模型模板资源
    this.modelTemplates.forEach((mesh) => {
      if (mesh.geometry) {
        mesh.geometry.dispose();
      }
      if (mesh.material) {
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach((mat) => mat.dispose());
        } else {
          (mesh.material as THREE.Material).dispose();
        }
      }
    });
    
    this.pool = [];
    this.active.clear();
    this.modelTemplates.clear();
  }
}
