import { Module, Global } from '@nestjs/common';
import { RedisService } from './redis.service';

/** Redis模块 - 全局可用，封装ioredis */
@Global()
@Module({
  providers: [RedisService],
  exports: [RedisService],
})
export class RedisModule {}
