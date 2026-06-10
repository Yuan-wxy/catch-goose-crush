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
import { addToSlot, isGameOver, isLevelClear, SlotItem, generateBalancedItems } from '../utils/GameLogic';

// 向父组件暴露方法
const emit = defineEmits<{
  (e: 'slotUpdate', slots: SlotItem[]): void;
  (e: 'gameOver'): void;
  (e: 'levelClear'): void;
  (e: 'potCountUpdate', count: number): void;
  (e: 'foodPicked', data: { itemKey: string; screenX: number; screenY: number }): void;
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

// 待入槽食材队列（飞行动画完成后依次入槽）
interface PendingItem {
  itemKey: string;
  mesh: THREE.Mesh;
  body: CANNON.Body;
  screenX: number;
  screenY: number;
}
let pendingItems: PendingItem[] = [];

/** 将3D世界坐标投影到页面坐标（用于飞行动画起点） */
function worldToPage(worldPos: THREE.Vector3): { x: number; y: number } {
  const vec = worldPos.clone().project(threeEnv.camera);
  const canvasRect = containerRef.value!.getBoundingClientRect();
  return {
    x: canvasRect.left + (vec.x * 0.5 + 0.5) * canvasRect.width,
    y: canvasRect.top + (-vec.y * 0.5 + 0.5) * canvasRect.height,
  };
}

/** 预测食材将插入卡槽的索引位置（供父组件定位飞行目标） */
function predictSlotIndex(itemKey: string): number {
  let insertIndex = -1;
  for (let i = slots.length - 1; i >= 0; i--) {
    if (slots[i].itemKey === itemKey) {
      insertIndex = i + 1;
      break;
    }
  }
  return insertIndex === -1 ? slots.length : insertIndex;
}

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

  // 生成每种数量为3的倍数的食材列表，确保能全部消除
  const items = generateBalancedItems(itemTypeList, itemTotal);
  for (const itemKey of items) {
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

    // 记录3D世界坐标用于投影
    const worldPos = item.mesh.position.clone();

    // 取消物理注册，从场景移除
    physicWorld.unregisterBody(item.body);
    threeEnv.scene.remove(item.mesh);

    // 投影到页面坐标
    const screenPos = worldToPage(worldPos);

    // 存入待入槽队列
    pendingItems.push({
      itemKey,
      mesh: item.mesh,
      body: item.body,
      screenX: screenPos.x,
      screenY: screenPos.y,
    });

    // 如果是队列中第一个，立即发射飞行动画事件
    if (pendingItems.length === 1) {
      emit('foodPicked', { itemKey, screenX: screenPos.x, screenY: screenPos.y });
    }

    emit('potCountUpdate', potItems.length);
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

/** 道具：一键凑三 - 从锅中选取3个同品种食材入槽消除 */
function useMakeTriple() {
  if (!isPlaying) return;

  // 统计卡槽中已有的食材数量
  const slotCountMap: Record<string, number> = {};
  slots.forEach((s) => {
    slotCountMap[s.itemKey] = (slotCountMap[s.itemKey] || 0) + 1;
  });

  // 统计锅中各品种的食材列表
  const potGroupMap: Record<string, typeof potItems> = {};
  potItems.forEach((item) => {
    if (!potGroupMap[item.itemKey]) potGroupMap[item.itemKey] = [];
    potGroupMap[item.itemKey].push(item);
  });

  // 确定目标品种和需要从锅中选取的数量
  let targetKey = '';
  let needCount = 0;

  // 优先策略：卡槽中已有某品种，从锅中补齐到3个
  let bestNeed = 4;
  for (const [key, count] of Object.entries(slotCountMap)) {
    const potHas = potGroupMap[key]?.length || 0;
    const need = 3 - count;
    if (need > 0 && potHas >= need && need < bestNeed) {
      targetKey = key;
      needCount = need;
      bestNeed = need;
    }
  }

  // 如果卡槽中没有可补齐的，从锅中直接选3个同品种
  if (!targetKey) {
    for (const [key, items] of Object.entries(potGroupMap)) {
      if (items.length >= 3) {
        targetKey = key;
        needCount = 3;
        break;
      }
    }
  }

  if (!targetKey) return; // 没有可凑三的食材

  // 从锅中选取食材，存入待入槽队列
  const potItemsOfType = potGroupMap[targetKey];
  const wasEmpty = pendingItems.length === 0;
  for (let i = 0; i < needCount; i++) {
    const potItem = potItemsOfType[i];

    // 从锅中移除
    const idx = potItems.indexOf(potItem);
    if (idx < 0) continue;
    potItems.splice(idx, 1);

    // 记录位置并投影
    const worldPos = potItem.mesh.position.clone();
    physicWorld.unregisterBody(potItem.body);
    threeEnv.scene.remove(potItem.mesh);
    const screenPos = worldToPage(worldPos);

    pendingItems.push({
      itemKey: potItem.itemKey,
      mesh: potItem.mesh,
      body: potItem.body,
      screenX: screenPos.x,
      screenY: screenPos.y,
    });
  }

  // 如果队列之前为空，发射第一个飞行动画事件
  if (wasEmpty && pendingItems.length > 0) {
    const first = pendingItems[0];
    emit('foodPicked', { itemKey: first.itemKey, screenX: first.screenX, screenY: first.screenY });
  }

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
  pendingItems = []; // 清空待入槽队列
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
  completePickItem,
  getTargetSlotIndex: predictSlotIndex,
  getSlots: () => slots,
  getPotCount: () => potItems.length,
  getItemTypes: () => levelItemTypes,
});

/** 完成食材入槽（飞行动画结束后由父组件调用） */
function completePickItem() {
  if (pendingItems.length === 0) return;
  const { itemKey, mesh, body } = pendingItems.shift()!;

  const slotItem: SlotItem = { itemKey, meshRef: mesh, bodyRef: body };
  const result = addToSlot(slots, slotItem);

  // 如果有三消，回收消除的mesh
  if (result.matched > 0) {
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

  // 如果还有待入槽食材，发射下一个飞行动画
  if (pendingItems.length > 0) {
    const next = pendingItems[0];
    emit('foodPicked', { itemKey: next.itemKey, screenX: next.screenX, screenY: next.screenY });
  }
}
</script>

<style scoped>
.game-container {
  width: 100%;
  height: 100%;
  touch-action: none;
}
</style>
