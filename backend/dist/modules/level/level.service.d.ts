import { Repository } from 'typeorm';
import { LevelConfig } from '../../entities/level-config.entity';
import { RedisService } from '../redis/redis.service';
export declare class LevelService {
    private readonly levelRepo;
    private readonly redisService;
    constructor(levelRepo: Repository<LevelConfig>, redisService: RedisService);
    getLevelByNo(levelNo: number): Promise<LevelConfig>;
}
