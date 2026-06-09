import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LevelConfig } from '../../entities/level-config.entity';
import { RedisService } from '../redis/redis.service';

/** 关卡服务 - 查询关卡配置，Redis缓存24h */
@Injectable()
export class LevelService {
  constructor(
    @InjectRepository(LevelConfig)
    private readonly levelRepo: Repository<LevelConfig>,
    private readonly redisService: RedisService,
  ) {}

  /** 获取关卡配置，优先从Redis缓存读取 */
  async getLevelByNo(levelNo: number): Promise<LevelConfig> {
    const cacheKey = `level:cfg:${levelNo}`;
    // 1. 尝试从缓存获取
    const cached = await this.redisService.get(cacheKey);
    if (cached) {
      return JSON.parse(cached);
    }
    // 2. 缓存未命中，查询数据库
    const level = await this.levelRepo.findOneBy({ levelNo });
    if (!level) {
      return null;
    }
    // 3. 写入缓存，有效期24小时（86400秒）
    await this.redisService.set(cacheKey, JSON.stringify(level), 86400);
    return level;
  }
}
