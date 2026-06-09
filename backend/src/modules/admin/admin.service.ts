import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LevelConfig } from '../../entities/level-config.entity';
import { ItemInfo } from '../../entities/item-info.entity';
import { UserRecord } from '../../entities/user-record.entity';
import { RedisService } from '../redis/redis.service';

/** 后台管理服务 - 关卡CRUD、食材CRUD、玩家统计 */
@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(LevelConfig)
    private readonly levelRepo: Repository<LevelConfig>,
    @InjectRepository(ItemInfo)
    private readonly itemRepo: Repository<ItemInfo>,
    @InjectRepository(UserRecord)
    private readonly userRepo: Repository<UserRecord>,
    private readonly redisService: RedisService,
  ) {}

  /** 新增/修改关卡，同时清除Redis缓存 */
  async saveLevel(body: { levelNo: number; itemTypeList: string[]; itemTotal: number }): Promise<LevelConfig> {
    let level = await this.levelRepo.findOneBy({ levelNo: body.levelNo });
    if (level) {
      level.itemTypeList = body.itemTypeList;
      level.itemTotal = body.itemTotal;
    } else {
      level = this.levelRepo.create(body);
    }
    const saved = await this.levelRepo.save(level);
    // 清除该关卡的Redis缓存
    await this.redisService.del(`level:cfg:${body.levelNo}`);
    return saved;
  }

  /** 关卡列表分页 */
  async getLevelList(page: number, pageSize: number): Promise<{ list: LevelConfig[]; total: number }> {
    const [list, total] = await this.levelRepo.findAndCount({
      skip: (page - 1) * pageSize,
      take: pageSize,
      order: { levelNo: 'ASC' },
    });
    return { list, total };
  }

  /** 删除关卡 */
  async deleteLevel(levelNo: number): Promise<void> {
    await this.levelRepo.delete({ levelNo });
    await this.redisService.del(`level:cfg:${levelNo}`);
  }

  /** 新增/修改食材 */
  async saveItem(body: { itemKey: string; resPath: string }): Promise<ItemInfo> {
    let item = await this.itemRepo.findOneBy({ itemKey: body.itemKey });
    if (item) {
      item.resPath = body.resPath;
    } else {
      item = this.itemRepo.create(body);
    }
    return this.itemRepo.save(item);
  }

  /** 删除食材 */
  async deleteItem(itemKey: string): Promise<void> {
    await this.itemRepo.delete({ itemKey });
  }

  /** 玩家数据统计 */
  async getPlayerStats(page: number, pageSize: number): Promise<{ list: UserRecord[]; total: number }> {
    const [list, total] = await this.userRepo.findAndCount({
      skip: (page - 1) * pageSize,
      take: pageSize,
      order: { maxLevel: 'DESC' },
    });
    return { list, total };
  }
}
