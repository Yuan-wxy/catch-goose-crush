"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = void 0;
class Result {
    constructor(code, msg, data = null) {
        this.code = code;
        this.msg = msg;
        this.data = data;
    }
    static success(data = null, msg = '操作成功') {
        return new Result(200, msg, data);
    }
    static fail(msg = '操作失败', code = 500) {
        return new Result(code, msg, null);
    }
}
exports.Result = Result;
//# sourceMappingURL=result.js.map