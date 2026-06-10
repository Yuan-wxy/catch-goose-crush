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
          <span v-if="item" class="slot-item">{{ item.itemKey }}</span>
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
  border-color: #4ecdc4;
  background: rgba(78, 205, 196, 0.2);
}

.slot-selected {
  border-color: #ff6b6b;
  background: rgba(255, 107, 107, 0.3);
  transform: scale(1.1);
}

.slot-item {
  font-weight: bold;
  text-transform: uppercase;
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