/** 微信小游戏API类型声明 */
declare const wx: {
  startAccelerometer: (opts: { interval?: string; success?: () => void; fail?: (err: any) => void }) => void;
  stopAccelerometer: (opts: {}) => void;
  onAccelerometerChange: (cb: (res: { x: number; y: number; z: number }) => void) => void;
};
