import { Injectable, OnModuleDestroy } from '@nestjs/common';
import Redis from 'ioredis';
import { redisConfig } from '../../config/database.config';

/** Redis服务 - 封装ioredis常用操作 */
@Injectable()
export class RedisService implements OnModuleDestroy {
  private readonly client: Redis;

  constructor() {
    this.client = new Redis({
      host: redisConfig.host,
      port: redisConfig.port,
      password: redisConfig.password || undefined,
      db: redisConfig.db,
    });
    this.client.on('connect', () => console.log('[Redis] 连接成功'));
    this.client.on('error', (err) => console.error('[Redis] 连接错误:', err.message));
  }

  /** 获取缓存 */
  async get(key: string): Promise<string | null> {
    return this.client.get(key);
  }

  /** 设置缓存，expireSec秒后过期 */
  async set(key: string, value: string, expireSec?: number): Promise<void> {
    if (expireSec) {
      await this.client.set(key, value, 'EX', expireSec);
    } else {
      await this.client.set(key, value);
    }
  }

  /** 删除缓存 */
  async del(key: string): Promise<void> {
    await this.client.del(key);
  }

  /** 模块销毁时关闭连接 */
  onModuleDestroy() {
    this.client.disconnect();
  }
}
