<template>
  <div class="game-page">
    <!-- 游戏3D容器 -->
    <div class="game-area">
      <GameContainer
        ref="gameRef"
        @slotUpdate="onSlotUpdate"
        @gameOver="onGameOver"
        @levelClear="onLevelClear"
        @potCountUpdate="onPotCountUpdate"
        @foodPicked="onFoodPicked"
      />
    </div>

    <!-- 顶部关卡信息 -->
    <div class="top-bar">
      <span class="level-info">关卡 {{ currentLevel }}</span>
      <span class="pot-count">锅内剩余: {{ potCount }}</span>
    </div>

    <!-- 底部卡槽UI -->
    <div class="slot-bar">
      <div class="slot-container">
        <div
          v-for="(item, index) in displaySlots"
          :key="index"
          class="slot-cell"
          :class="{ 'slot-filled': item, 'slot-selected': selectedSlot === index }"
          @click="onSlotClick(index)"
        >
          <div v-if="item" class="slot-food" :style="{ backgroundColor: getItemStyle(item.itemKey).color }">
            <span class="slot-emoji">{{ getItemStyle(item.itemKey).emoji }}</span>
          </div>
        </div>
        <!-- 空槽位补齐 -->
        <div v-for="n in (7 - displaySlots.length)" :key="'empty-' + n" class="slot-cell slot-empty"></div>
      </div>
    </div>

    <!-- 道具按钮区域 -->
    <div class="tool-bar">
      <button class="tool-btn" @click="useReturnTool" :disabled="selectedSlot < 0">道具回锅</button>
      <button class="tool-btn" @click="useShuffleTool">全局洗牌</button>
      <button class="tool-btn" @click="useTripleTool">一键凑三</button>
      <!-- 网页调试模拟摇晃按钮 -->
      <button class="tool-btn shake-btn" @click="simulateShake">模拟摇晃</button>
    </div>

    <!-- 失败弹窗 - 大鹅失败弹窗 -->
    <div v-if="showFailDialog" class="dialog-overlay">
      <div class="dialog fail-dialog">
        <div class="goose-icon">🦆</div>
        <h2>游戏失败！</h2>
        <p>卡槽已满，无法继续消除</p>
        <button class="dialog-btn" @click="restartGame">重新挑战</button>
      </div>
    </div>

    <!-- 通关弹窗 -->
    <div v-if="showClearDialog" class="dialog-overlay">
      <div class="dialog clear-dialog">
        <div class="goose-icon">🎉</div>
        <h2>恭喜通关！</h2>
        <p>关卡 {{ currentLevel }} 已完成</p>
        <button class="dialog-btn" @click="nextLevel">下一关</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import GameContainer from '../components/GameContainer.vue';
import { getLevelConfig, saveUserRecord } from '../core/Http';
import { SlotItem } from '../utils/GameLogic';

const gameRef = ref<any>();
const currentLevel = ref(1);
const displaySlots = ref<SlotItem[]>([]);
const potCount = ref(0);
const selectedSlot = ref(-1); // 当前选中的卡槽索引（用于回锅道具）
const showFailDialog = ref(false);
const showClearDialog = ref(false);
const openid = ref('test_openid_' + Date.now()); // 模拟微信openid

/** 食材样式映射 - 与ItemPool.ts颜色和3D球体保持一致 */
const ITEM_STYLE: Record<string, { emoji: string; color: string }> = {
  apple: { emoji: '🍎', color: '#ff4444' },
  banana: { emoji: '🍌', color: '#ffcc00' },
  orange: { emoji: '🍊', color: '#ff8800' },
  grape: { emoji: '🍇', color: '#8844cc' },
  peach: { emoji: '🍑', color: '#ffaa88' },
};

function getItemStyle(itemKey: string): { emoji: string; color: string } {
  return ITEM_STYLE[itemKey] || { emoji: '🔵', color: '#aaaaaa' };
}

// ========== 飞行动画系统 ==========
let flyQueue: { itemKey: string; screenX: number; screenY: number }[] = [];
let isFlyAnimating = false;

/** 接收食材拾取事件，排队播放飞行动画 */
function onFoodPicked(data: { itemKey: string; screenX: number; screenY: number }) {
  flyQueue.push(data);
  if (!isFlyAnimating) processFlyQueue();
}

/** 依次处理飞行动画队列 */
function processFlyQueue() {
  if (flyQueue.length === 0) {
    isFlyAnimating = false;
    return;
  }
  isFlyAnimating = true;
  const data = flyQueue.shift()!;
  startFlyingAnim(data, () => {
    gameRef.value?.completePickItem();
    processFlyQueue();
  });
}

/** 创建DOM飞行动画元素 */
function startFlyingAnim(
  data: { itemKey: string; screenX: number; screenY: number },
  onComplete: () => void,
) {
  const style = getItemStyle(data.itemKey);

  // 创建飞行元素
  const el = document.createElement('div');
  el.className = 'flying-food';
  el.style.backgroundColor = style.color;
  el.innerHTML = style.emoji;

  // 初始位置：3D球体的屏幕投影
  el.style.position = 'fixed';
  el.style.left = data.screenX + 'px';
  el.style.top = data.screenY + 'px';
  el.style.zIndex = '1000';
  el.style.transform = 'translate(-50%, -50%) scale(1)';
  el.style.transition = 'left 0.35s cubic-bezier(0.4, 0, 0.2, 1), top 0.35s cubic-bezier(0.4, 0, 0.2, 1), transform 0.35s ease';
  document.body.appendChild(el);

  // 计算目标槽位位置
  const targetIndex = gameRef.value?.getTargetSlotIndex(data.itemKey) ?? 0;
  const slotCells = document.querySelectorAll('.slot-cell');
  const targetCell = slotCells[targetIndex] as HTMLElement;
  let targetX = data.screenX;
  let targetY = data.screenY;
  if (targetCell) {
    const rect = targetCell.getBoundingClientRect();
    targetX = rect.left + rect.width / 2;
    targetY = rect.top + rect.height / 2;
  } else {
    const slotBar = document.querySelector('.slot-bar');
    if (slotBar) {
      const rect = slotBar.getBoundingClientRect();
      targetX = rect.left + rect.width / 2;
      targetY = rect.top + rect.height / 2;
    }
  }

  // 触发飞行动画
  requestAnimationFrame(() => {
    el.style.left = targetX + 'px';
    el.style.top = targetY + 'px';
    el.style.transform = 'translate(-50%, -50%) scale(0.85)';
  });

  // 动画完成回调
  el.addEventListener('transitionend', () => {
    document.body.removeChild(el);
    onComplete();
  }, { once: true });
}

/** 加载关卡配置并启动游戏 */
async function startLevel(levelNo: number) {
  currentLevel.value = levelNo;
  try {
    const res: any = await getLevelConfig(levelNo);
    gameRef.value?.loadLevel(res.itemTypeList, res.itemTotal);
  } catch (err) {
    console.error('加载关卡失败:', err);
    // 如果接口失败，使用默认配置
    gameRef.value?.loadLevel(['apple', 'banana', 'orange'], 12);
  }
}

/** 卡槽更新回调 */
function onSlotUpdate(slots: SlotItem[]) {
  displaySlots.value = slots;
  selectedSlot.value = -1; // 清除选中
}

/** 锅内数量更新 */
function onPotCountUpdate(count: number) {
  potCount.value = count;
}

/** 游戏失败回调 */
function onGameOver() {
  showFailDialog.value = true;
}

/** 通关回调 - 保存记录并解锁下一关 */
async function onLevelClear() {
  showClearDialog.value = true;
  try {
    await saveUserRecord(openid.value, currentLevel.value);
  } catch (err) {
    console.error('保存通关记录失败:', err);
  }
}

/** 点击卡槽 - 用于选中回锅目标 */
function onSlotClick(index: number) {
  if (displaySlots.value[index]) {
    selectedSlot.value = selectedSlot.value === index ? -1 : index;
  }
}

/** 道具：回锅 */
function useReturnTool() {
  if (selectedSlot.value >= 0) {
    gameRef.value?.useReturnToPot(selectedSlot.value);
    selectedSlot.value = -1;
  }
}

/** 道具：洗牌 */
function useShuffleTool() {
  gameRef.value?.useShuffle();
}

/** 道具：一键凑三 */
function useTripleTool() {
  gameRef.value?.useMakeTriple();
}

/** 模拟摇晃（网页调试） */
function simulateShake() {
  gameRef.value?.simulateShake();
}

/** 重新挑战 */
function restartGame() {
  showFailDialog.value = false;
  startLevel(currentLevel.value);
}

/** 进入下一关 */
function nextLevel() {
  showClearDialog.value = false;
  startLevel(currentLevel.value + 1);
}

onMounted(() => {
  startLevel(1);
});
</script>

<style scoped>
.game-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #1a1a2e;
  color: #fff;
  position: relative;
}

.game-area {
  flex: 1;
  position: relative;
}

.top-bar {
  position: absolute;
  top: 10px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 10;
  font-size: 16px;
}

.level-info {
  background: rgba(0, 0, 0, 0.5);
  padding: 4px 12px;
  border-radius: 12px;
}

.pot-count {
  background: rgba(0, 0, 0, 0.5);
  padding: 4px 12px;
  border-radius: 12px;
}

.slot-bar {
  height: 80px;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 0;
}

.slot-container {
  display: flex;
  gap: 6px;
}

.slot-cell {
  width: 52px;
  height: 52px;
  border: 2px solid #555;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  transition: all 0.2s;
  cursor: pointer;
}

.slot-empty {
  border-color: #333;
  background: rgba(0, 0, 0, 0.3);
}

.slot-filled {
  border-color: transparent;
  background: transparent;
  padding: 0;
}

.slot-selected {
  transform: scale(1.1);
  filter: brightness(1.3);
}

.slot-food {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4), inset 0 -2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.2s;
  animation: slotPopIn 0.3s ease-out;
}

.slot-emoji {
  font-size: 24px;
  line-height: 1;
}

@keyframes slotPopIn {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  60% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.flying-food {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  line-height: 1;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  pointer-events: none;
}

.tool-bar {
  height: 60px;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 8px 16px;
}

.tool-btn {
  padding: 8px 16px;
  border: none;
  border-radius: 20px;
  background: #4ecdc4;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
}

.tool-btn:hover {
  background: #45b7aa;
}

.tool-btn:disabled {
  background: #666;
  cursor: not-allowed;
}

.shake-btn {
  background: #ff6b6b;
}

.shake-btn:hover {
  background: #ee5a5a;
}

.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.dialog {
  width: 280px;
  padding: 30px;
  border-radius: 16px;
  text-align: center;
}

.fail-dialog {
  background: #2d1f3d;
  border: 2px solid #ff6b6b;
}

.clear-dialog {
  background: #1f3d2d;
  border: 2px solid #4ecdc4;
}

.goose-icon {
  font-size: 60px;
  margin-bottom: 10px;
}

.dialog h2 {
  margin: 8px 0;
  font-size: 24px;
}

.dialog p {
  margin: 8px 0 20px;
  color: #aaa;
}

.dialog-btn {
  padding: 12px 32px;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  color: #fff;
}

.fail-dialog .dialog-btn {
  background: #ff6b6b;
}

.clear-dialog .dialog-btn {
  background: #4ecdc4;
}
</style>