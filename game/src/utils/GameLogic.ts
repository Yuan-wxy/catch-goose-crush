/**
 * 三消算法工具
 * 卡槽数组：7格，3个相同item自动消除
 * 7格全部填满无法消除 → 游戏失败
 * 锅内全部食材消除完毕 → 通关
 */

/** 卡槽项 */
export interface SlotItem {
  itemKey: string;
  /** 关联的Three.js Mesh（用于回锅道具） */
  meshRef?: any;
  /** 关联的Cannon刚体（用于回锅道具） */
  bodyRef?: any;
}

/**
 * 向卡槽添加食材，自动检测三消
 * @returns { slots: 更新后的卡槽, matched: 本次消除的item数量 }
 */
export function addToSlot(
  slots: SlotItem[],
  item: SlotItem,
  maxSlots = 7,
): { slots: SlotItem[]; matched: number } {
  // 添加到卡槽末尾
  slots.push(item);

  // 检测三消：找到所有相同itemKey的位置
  let matched = 0;
  const newSlots = checkAndRemoveTriples(slots);
  matched = slots.length - newSlots.length;

  return { slots: newSlots, matched };
}

/**
 * 检测并消除三消
 * 从左到右扫描，相邻3个相同itemKey即消除
 * 消除后可能产生新的三消，递归检测
 */
export function checkAndRemoveTriples(slots: SlotItem[]): SlotItem[] {
  let result = [...slots];
  let found = true;

  // 递归消除直到没有新的三消
  while (found) {
    found = false;
    for (let i = 0; i <= result.length - 3; i++) {
      if (
        result[i].itemKey === result[i + 1].itemKey &&
        result[i + 1].itemKey === result[i + 2].itemKey
      ) {
        // 消除这3个
        result.splice(i, 3);
        found = true;
        break; // 重新从头扫描
      }
    }
  }

  return result;
}

/**
 * 判断游戏是否失败（卡槽已满且无法消除）
 */
export function isGameOver(slots: SlotItem[], maxSlots = 7): boolean {
  return slots.length >= maxSlots && !hasPossibleMatch(slots);
}

/**
 * 判断是否存在可消除的三消
 */
export function hasPossibleMatch(slots: SlotItem[]): boolean {
  // 统计每种item的数量，如果某项>=3则可消除
  const countMap: Record<string, number> = {};
  slots.forEach((s) => {
    countMap[s.itemKey] = (countMap[s.itemKey] || 0) + 1;
  });
  return Object.values(countMap).some((count) => count >= 3);
}

/**
 * 判断是否通关（锅内食材已全部消除）
 */
export function isLevelClear(potItemCount: number): boolean {
  return potItemCount === 0;
}

/**
 * 道具：一键凑三 - 生成一组可三消的食材
 * 从卡槽中找出数量为2的itemKey，再补1个即可三消
 * 如果没有，随机选一个itemKey，生成3个
 */
export function generateTripleItems(
  slots: SlotItem[],
  availableTypes: string[],
): string[] {
  // 统计卡槽中已有的食材数量
  const countMap: Record<string, number> = {};
  slots.forEach((s) => {
    countMap[s.itemKey] = (countMap[s.itemKey] || 0) + 1;
  });

  // 优先找数量为2的，补1个即可三消
  for (const [key, count] of Object.entries(countMap)) {
    if (count === 2) {
      return [key];
    }
  }

  // 否则随机生成3个相同的
  const randomType = availableTypes[Math.floor(Math.random() * availableTypes.length)];
  return [randomType, randomType, randomType];
}

/**
 * 道具：洗牌 - 随机重新排列锅内食材位置
 * 返回新的坐标数组（x, y, z）
 */
export function shufflePositions(count: number, range = 2): { x: number; y: number; z: number }[] {
  const positions: { x: number; y: number; z: number }[] = [];
  for (let i = 0; i < count; i++) {
    positions.push({
      x: (Math.random() - 0.5) * range * 2,
      y: 3 + Math.random() * 4, // 从锅上方掉落
      z: (Math.random() - 0.5) * range * 2,
    });
  }
  return positions;
}
