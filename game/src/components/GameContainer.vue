<template>
  <div ref="containerRef" class="game-container" @click="onCanvasClick"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { ThreeEnv } from '../core/ThreeEnv';
import { PhysicWorld } from '../core/PhysicWorld';
import { ShakeSensor } from '../core/ShakeSensor';
import { ItemPool } from '../pool/ItemPool';
import { addToSlot, isGameOver, isLevelClear, SlotItem, generateTripleItems } from '../utils/GameLogic';

// 向父组件暴露方法
const emit = defineEmits<{
  (e: 'slotUpdate', slots: SlotItem[]): void;
  (e: 'gameOver'): void;
  (e: 'levelClear'): void;
  (e: 'potCountUpdate', count: number): void;
}>();

const containerRef = ref<HTMLDivElement>();

let threeEnv: ThreeEnv;
let physicWorld: PhysicWorld;
let shakeSensor: ShakeSensor;
let itemPool: ItemPool;

// 游戏状态
let slots: SlotItem[] = [];
let potItems: { mesh: THREE.Mesh; body: CANNON.Body; itemKey: string }[] = [];
let levelItemTypes: string[] = [];
let isPlaying = false;
let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();

/** 初始化3D场景+物理世界 */
onMounted(() => {
  if (!containerRef.value) return;

  threeEnv = new ThreeEnv(containerRef.value);
  physicWorld = new PhysicWorld();
  shakeSensor = new ShakeSensor();
  itemPool = new ItemPool(30);

  // 创建锅体3D模型和碰撞体
  threeEnv.createPot();
  physicWorld.createPotCollider();

  // 注册每帧物理步进+坐标同步
  threeEnv.addAnimFn(() => {
    if (isPlaying) {
      physicWorld.step();
      physicWorld.clampBodies(); // 安全边界检查，防止小球飞出
      physicWorld.syncBodies();
    }
  });

  // 设置摇晃回调 - 颠锅翻滚效果
  shakeSensor.setShakeCallback(() => {
    onShakePot();
  });
  shakeSensor.start();
});

onUnmounted(() => {
  shakeSensor.stop();
  threeEnv?.dispose();
  itemPool?.dispose();
});

/** 加载关卡 - 批量生成食材球体 */
function loadLevel(itemTypeList: string[], itemTotal: number) {
  clearAllItems();
  levelItemTypes = itemTypeList;
  isPlaying = true;

  // 根据关卡配置生成食材（y控制在壁面高度内，防止高处生成飞出）
  for (let i = 0; i < itemTotal; i++) {
    const itemKey = itemTypeList[i % itemTypeList.length];
    spawnItem(itemKey, 1 + Math.random() * 2.5);
  }

  emit('potCountUpdate', potItems.length);
}

/** 生成单个食材球体 */
function spawnItem(itemKey: string, y: number) {
  const x = (Math.random() - 0.5) * 4;
  const z = (Math.random() - 0.5) * 4;

  // 从对象池获取Mesh
  const mesh = itemPool.acquire(itemKey);
  mesh.position.set(x, y, z);
  threeEnv.scene.add(mesh);

  // 创建物理刚体
  const body = physicWorld.createSphereBody(x, y, z);
  physicWorld.registerBody(body, mesh);

  const item = { mesh, body, itemKey };
  potItems.push(item);
}

/** 点击拾取食材 - Raycaster射线检测 */
function onCanvasClick(event: MouseEvent) {
  if (!isPlaying || !containerRef.value) return;

  const rect = containerRef.value.getBoundingClientRect();
  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

  raycaster.setFromCamera(mouse, threeEnv.camera);

  // 只检测食材球体
  const activeMeshes = itemPool.getActiveMeshes();
  const intersects = raycaster.intersectObjects(activeMeshes);

  if (intersects.length > 0) {
    const hitMesh = intersects[0].object as THREE.Mesh;
    const itemKey = itemPool.getItemKey(hitMesh);
    if (!itemKey) return;

    // 从锅中移除
    const idx = potItems.findIndex((item) => item.mesh === hitMesh);
    if (idx < 0) return;

    const item = potItems.splice(idx, 1)[0];

    // 取消物理注册，回收到对象池
    physicWorld.unregisterBody(item.body);
    threeEnv.scene.remove(item.mesh);

    // 添加到卡槽
    const slotItem: SlotItem = {
      itemKey,
      meshRef: item.mesh,
      bodyRef: item.body,
    };
    const result = addToSlot(slots, slotItem);

    // 如果有三消，回收消除的mesh
    if (result.matched > 0) {
      // 找出被消除的mesh（slots中不再存在的）
      const currentMeshes = new Set(result.slots.map((s) => s.meshRef));
      slots.forEach((s) => {
        if (!currentMeshes.has(s.meshRef)) {
          itemPool.release(s.meshRef as THREE.Mesh);
        }
      });
    }
    slots = result.slots;

    emit('slotUpdate', slots);
    emit('potCountUpdate', potItems.length);

    // 检查游戏状态
    if (isLevelClear(potItems.length)) {
      isPlaying = false;
      emit('levelClear');
    } else if (isGameOver(slots)) {
      isPlaying = false;
      emit('gameOver');
    }
  }
}

/** 摇晃颠锅 - 给所有食材施加瞬时冲量 */
function onShakePot() {
  if (!isPlaying) return;
  const impulse = new CANNON.Vec3(
    (Math.random() - 0.5) * 6,
    3 + Math.random() * 3,
    (Math.random() - 0.5) * 6,
  );
  physicWorld.applyImpulseToAll(impulse);
}

/** 道具：回锅 - 选中卡槽物品丢回锅内 */
function useReturnToPot(slotIndex: number) {
  if (slotIndex < 0 || slotIndex >= slots.length) return;
  const item = slots.splice(slotIndex, 1)[0];

  // 重新放入锅内（y控制在壁面高度内）
  const mesh = item.meshRef as THREE.Mesh;
  const y = 1 + Math.random() * 2.5;
  const x = (Math.random() - 0.5) * 3;
  const z = (Math.random() - 0.5) * 3;
  mesh.position.set(x, y, z);
  mesh.visible = true;
  threeEnv.scene.add(mesh);

  const body = physicWorld.createSphereBody(x, y, z);
  physicWorld.registerBody(body, mesh);

  // 重新从对象池acquire（恢复颜色和active状态）
  itemPool.acquire(item.itemKey); // 重新标记为active
  potItems.push({ mesh, body, itemKey: item.itemKey });

  emit('slotUpdate', slots);
  emit('potCountUpdate', potItems.length);
}

/** 道具：全局洗牌 - 锅内全部食材随机重置位置 */
function useShuffle() {
  if (!isPlaying) return;

  // 先移除所有锅内食材的物理体
  potItems.forEach((item) => {
    physicWorld.unregisterBody(item.body);
  });

  // 重新分配随机位置（y控制在壁面高度内）
  potItems.forEach((item) => {
    const x = (Math.random() - 0.5) * 3;
    const y = 1 + Math.random() * 2.5;
    const z = (Math.random() - 0.5) * 3;
    item.mesh.position.set(x, y, z);

    const body = physicWorld.createSphereBody(x, y, z);
    physicWorld.registerBody(body, item.mesh);
    item.body = body;
  });
}

/** 道具：一键凑三 - 随机生成一组可三消食材丢入锅内 */
function useMakeTriple(itemTypes: string[]) {
  if (!isPlaying) return;
  const items = generateTripleItems(slots, itemTypes);
  items.forEach((key: string) => spawnItem(key, 1 + Math.random() * 2.5));
  emit('potCountUpdate', potItems.length);
}

/** 清除所有食材 */
function clearAllItems() {
  potItems.forEach((item) => {
    physicWorld.unregisterBody(item.body);
    threeEnv.scene.remove(item.mesh);
    itemPool.release(item.mesh);
  });
  potItems = [];
  // 回收卡槽中的mesh并清空
  slots.forEach((s) => {
    if (s.meshRef) {
      itemPool.release(s.meshRef as THREE.Mesh);
    }
  });
  slots = [];
  emit('slotUpdate', slots);
}

/** 模拟摇晃（网页调试用） */
function simulateShake() {
  shakeSensor.simulateShake();
}

// 暴露给父组件的方法
defineExpose({
  loadLevel,
  useReturnToPot,
  useShuffle,
  useMakeTriple,
  simulateShake,
  getSlots: () => slots,
  getPotCount: () => potItems.length,
  getItemTypes: () => levelItemTypes,
});
</script>

<style scoped>
.game-container {
  width: 100%;
  height: 100%;
  touch-action: none;
}
</style>
