"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const result_1 = require("./result");
let GlobalExceptionFilter = class GlobalExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        let code = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        let msg = '服务器内部错误';
        if (exception instanceof common_1.HttpException) {
            code = exception.getStatus();
            const exRes = exception.getResponse();
            msg = typeof exRes === 'string' ? exRes : exRes.message || exception.message;
        }
        else if (exception instanceof Error) {
            msg = exception.message;
        }
        response.status(common_1.HttpStatus.OK).json(new result_1.Result(code, Array.isArray(msg) ? msg[0] : msg, null));
    }
};
exports.GlobalExceptionFilter = GlobalExceptionFilter;
exports.GlobalExceptionFilter = GlobalExceptionFilter = __decorate([
    (0, common_1.Catch)()
], GlobalExceptionFilter);
//# sourceMappingURL=http-exception.filter.js.map