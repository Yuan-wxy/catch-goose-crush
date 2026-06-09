/** 统一返回格式 */
export class Result<T = any> {
  code: number;
  msg: string;
  data: T;

  constructor(code: number, msg: string, data: T = null) {
    this.code = code;
    this.msg = msg;
    this.data = data;
  }

  /** 成功返回 */
  static success<T>(data: T = null, msg = '操作成功'): Result<T> {
    return new Result(200, msg, data);
  }

  /** 失败返回 */
  static fail(msg = '操作失败', code = 500): Result {
    return new Result(code, msg, null);
  }
}
