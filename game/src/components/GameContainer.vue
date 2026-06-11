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
  (e: 'tempUpdate', items: (SlotItem & { offsetX: number; offsetY: number })[]): void;
}>();

const containerRef = ref<HTMLDivElement>();

let threeEnv: ThreeEnv;
let physicWorld: PhysicWorld;
let shakeSensor: ShakeSensor;
let itemPool: ItemPool;

// 游戏状态
let slots: SlotItem[] = [];
let tempSlots: (SlotItem & { offsetX: number; offsetY: number })[] = []; // 暂存栏数据
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

/** 道具：移出 - 一键将卡槽里的前三个食材移动到暂存栏 */
function useReturnToPot() {
  if (!isPlaying) return;
  console.log('GameContainer.useReturnToPot called');
  console.log('Current slots length:', slots.length);
  // 获取前三个食材
  const count = Math.min(3, slots.length);
  console.log('Will move', count, 'items to temp');
  console.log('Slots before move:', slots.map(s => s.itemKey));
  for (let i = 0; i < count; i++) {
    console.log('Loop iteration:', i, 'Current slots length:', slots.length);
    // 从卡槽开头移除（shift）
    const item = slots.shift()!;
    console.log('Moving item:', item.itemKey);

    // 回收mesh到对象池
    if (item.meshRef) {
      itemPool.release(item.meshRef as THREE.Mesh);
    }

    // 计算暂存栏中的偏移位置（错开叠放效果）
    const slotIndex = tempSlots.length % 3; // 食材应该放在哪个格子 (0, 1, 2)
    const stackIndex = Math.floor(tempSlots.length / 3); // 是该格子的第几层 (0, 1, 2...)
    
    let offsetX = 0;
    let offsetY = 0;
    
    if (stackIndex > 0) {
      // 叠放的食材需要偏移
      offsetX = (stackIndex % 3) * 2 - 2; // 水平错开：-2, 0, 2像素循环
      offsetY = -stackIndex * 4 - 4; // 垂直向上叠加：-4, -8, -12像素
    }

    // 添加到暂存栏
    const tempItem = {
      ...item,
      offsetX,
      offsetY,
    };
    tempSlots.push(tempItem);
    console.log('Added to tempSlots:', tempItem.itemKey, 'Total tempSlots:', tempSlots.length);
  }

  console.log('After move - slots:', slots.length, 'tempSlots:', tempSlots.length);
  console.log('Emitting slotUpdate with:', slots.map(s => s.itemKey));
  console.log('Emitting tempUpdate with:', tempSlots.map(s => s.itemKey));
  emit('slotUpdate', [...slots]); // 创建新数组确保响应式更新
  emit('tempUpdate', [...tempSlots]); // 创建新数组确保响应式更新

  // 检查游戏状态
  if (isGameOver(slots)) {
    isPlaying = false;
    emit('gameOver');
  }
}

/** 将暂存栏的食材移回卡槽 */
function moveTempToSlot(slotIndex: number, itemIndex: number) {
  if (!isPlaying) return;
  if (slots.length >= 7) {
    console.log('卡槽已满');
    return;
  }

  // 获取该格子的所有食材
  const items = getTempItemsForSlot(slotIndex);
  if (items.length === 0 || itemIndex >= items.length) return;

  // 获取要移动的食材
  const item = items[itemIndex];

  console.log('=== moveTempToSlot 开始 ===');
  console.log('暂存栏食材:', item.itemKey);
  console.log('当前卡槽状态:', slots.map(s => s.itemKey));
  console.log('当前卡槽数量:', slots.length);
  console.log('=========================');

  // 从暂存栏移除该食材
  const actualIndex = slotIndex + itemIndex * 3;
  
  if (actualIndex >= 0 && actualIndex < tempSlots.length) {
    // 从暂存栏移除
    tempSlots.splice(actualIndex, 1);
    emit('tempUpdate', [...tempSlots]);

    // 将食材加入待入槽队列（飞行动画）
    // 暂存栏的食材没有 mesh，需要从对象池创建
    const newMesh = itemPool.acquire(item.itemKey);
    const newBody = physicWorld.createSphereBody(0, 5, 0);
    physicWorld.registerBody(newBody, newMesh);

    // 计算暂存栏中该食材的位置（用于飞行动画起点）
    // 暂存栏位置在屏幕上方中间，估算坐标
    const tempBarX = window.innerWidth / 2;
    const tempBarY = window.innerHeight - 180; // 暂存栏在卡槽上方
    
    pendingItems.push({
      itemKey: item.itemKey,
      mesh: newMesh,
      body: newBody,
      screenX: tempBarX + (slotIndex - 1) * 60, // 根据格子位置偏移
      screenY: tempBarY + itemIndex * -20, // 根据叠加层数偏移
    });

    console.log('已加入待入槽队列，当前队列长度:', pendingItems.length);

    // 如果队列之前为空，发射第一个飞行动画事件
    const wasEmpty = pendingItems.length === 1;
    if (wasEmpty) {
      const first = pendingItems[0];
      console.log('发射飞行动画事件');
      emit('foodPicked', { itemKey: first.itemKey, screenX: first.screenX, screenY: first.screenY });
    }
  }
}

/** 获取指定格子的所有食材（包括叠加的） */
function getTempItemsForSlot(slotIndex: number) {
  if (slotIndex < 0 || slotIndex >= 3) return [];
  
  const items = tempSlots;
  const result: (SlotItem & { offsetX: number; offsetY: number })[] = [];
  
  // 收集该格子对应的所有食材
  for (let i = slotIndex; i < items.length; i += 3) {
    result.push(items[i]);
  }
  
  return result;
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
  // 清空暂存栏
  tempSlots = [];
  pendingItems = []; // 清空待入槽队列
  emit('slotUpdate', slots);
  emit('tempUpdate', tempSlots);
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
  moveTempToSlot,
  getTargetSlotIndex: predictSlotIndex,
  getSlots: () => slots,
  getTempSlots: () => tempSlots,
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
  // 通关条件：锅里、卡槽和暂存栏都没有食材
  const allClear = potItems.length === 0 && slots.length === 0 && tempSlots.length === 0;
  
  if (allClear) {
    console.log('=== 关卡通关！===');
    console.log('锅里:', potItems.length, '卡槽:', slots.length, '暂存栏:', tempSlots.length);
    isPlaying = false;
    emit('levelClear');
  } else if (isGameOver(slots)) {
    console.log('=== 游戏失败 ===');
    console.log('锅里:', potItems.length, '卡槽:', slots.length, '暂存栏:', tempSlots.length);
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
