import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { Result } from './result';

/** 全局异常过滤器 - 统一捕获异常并返回标准格式 */
@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let code = HttpStatus.INTERNAL_SERVER_ERROR;
    let msg = '服务器内部错误';

    if (exception instanceof HttpException) {
      code = exception.getStatus();
      const exRes = exception.getResponse();
      msg = typeof exRes === 'string' ? exRes : (exRes as any).message || exception.message;
    } else if (exception instanceof Error) {
      msg = exception.message;
    }

    response.status(HttpStatus.OK).json(new Result(code, Array.isArray(msg) ? msg[0] : msg, null));
  }
}
