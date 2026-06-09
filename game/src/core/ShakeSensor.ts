/**
 * 微信摇一摇加速度监听封装
 * 适配微信小游戏环境，网页调试模式提供模拟按钮
 */
export class ShakeSensor {
  private lastX = 0;
  private lastY = 0;
  private lastZ = 0;
  private lastTime = 0;
  private threshold = 15; // 摇晃阈值
  private debounceMs = 500; // 防抖间隔
  private onShake: (() => void) | null = null;
  private isWxEnv = false;

  constructor() {
    // 检测是否在微信小游戏环境中
    this.isWxEnv = typeof wx !== 'undefined' && typeof wx.startAccelerometer === 'function';
  }

  /** 设置摇晃回调 */
  setShakeCallback(cb: () => void) {
    this.onShake = cb;
  }

  /** 启动加速度监听 */
  start() {
    if (this.isWxEnv) {
      this.startWxAccelerometer();
    }
    // 网页模式由Game.vue中的模拟按钮触发 simulateShake()
  }

  /** 停止加速度监听 */
  stop() {
    if (this.isWxEnv) {
      try { wx.stopAccelerometer({}); } catch (_) { /* ignore */ }
    }
  }

  /** 微信小游戏加速度监听 */
  private startWxAccelerometer() {
    wx.startAccelerometer({
      interval: 'game', // 约20ms采样
      success: () => console.log('[ShakeSensor] 微信加速度监听已开启'),
      fail: (err: any) => console.error('[ShakeSensor] 加速度监听失败:', err),
    });

    wx.onAccelerometerChange((res: any) => {
      this.handleAcceleration(res.x, res.y, res.z);
    });
  }

  /** 处理加速度数据 - 三轴差值计算+阈值防抖 */
  private handleAcceleration(x: number, y: number, z: number) {
    const now = Date.now();
    // 防抖：距上次触发不足debounceMs则忽略
    if (now - this.lastTime < this.debounceMs) {
      this.lastX = x;
      this.lastY = y;
      this.lastZ = z;
      return;
    }

    // 计算与上次采样的差值
    const deltaX = Math.abs(x - this.lastX);
    const deltaY = Math.abs(y - this.lastY);
    const deltaZ = Math.abs(z - this.lastZ);

    // 更新上次值
    this.lastX = x;
    this.lastY = y;
    this.lastZ = z;

    // 判断是否达到摇晃阈值
    const totalDelta = deltaX + deltaY + deltaZ;
    if (totalDelta > this.threshold) {
      this.lastTime = now;
      console.log('[ShakeSensor] 检测到摇晃, 差值:', totalDelta.toFixed(2));
      this.onShake?.();
    }
  }

  /** 网页模式模拟摇晃（由按钮调用） */
  simulateShake() {
    console.log('[ShakeSensor] 模拟摇晃触发');
    this.onShake?.();
  }
}
