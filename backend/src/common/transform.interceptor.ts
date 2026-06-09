import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { Result } from './result';

/** 响应拦截器 - 统一包装返回格式为 {code, msg, data} */
@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Result<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Result<T>> {
    return next.handle().pipe(
      map((data) => {
        // 如果已经是Result格式则直接返回
        if (data instanceof Result) {
          return data;
        }
        return Result.success(data);
      }),
    );
  }
}
