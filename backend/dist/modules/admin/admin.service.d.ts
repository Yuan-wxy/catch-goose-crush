import { Repository } from 'typeorm';
import { LevelConfig } from '../../entities/level-config.entity';
import { ItemInfo } from '../../entities/item-info.entity';
import { UserRecord } from '../../entities/user-record.entity';
import { RedisService } from '../redis/redis.service';
export declare class AdminService {
    private readonly levelRepo;
    private readonly itemRepo;
    private readonly userRepo;
    private readonly redisService;
    constructor(levelRepo: Repository<LevelConfig>, itemRepo: Repository<ItemInfo>, userRepo: Repository<UserRecord>, redisService: RedisService);
    saveLevel(body: {
        levelNo: number;
        itemTypeList: string[];
        itemTotal: number;
    }): Promise<LevelConfig>;
    getLevelList(page: number, pageSize: number): Promise<{
        list: LevelConfig[];
        total: number;
    }>;
    deleteLevel(levelNo: number): Promise<void>;
    saveItem(body: {
        itemKey: string;
        resPath: string;
    }): Promise<ItemInfo>;
    deleteItem(itemKey: string): Promise<void>;
    getPlayerStats(page: number, pageSize: number): Promise<{
        list: UserRecord[];
        total: number;
    }>;
}
