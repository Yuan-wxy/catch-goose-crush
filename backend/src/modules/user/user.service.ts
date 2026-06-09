import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRecord } from '../../entities/user-record.entity';

/** 用户服务 - 保存/更新玩家通关存档 */
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRecord)
    private readonly userRepo: Repository<UserRecord>,
  ) {}

  /** 保存通关记录，若已存在则更新最高关卡 */
  async saveRecord(openid: string, maxLevel: number): Promise<UserRecord> {
    let record = await this.userRepo.findOneBy({ openid });
    if (record) {
      // 只有新关卡更高时才更新
      if (maxLevel > record.maxLevel) {
        record.maxLevel = maxLevel;
        record = await this.userRepo.save(record);
      }
    } else {
      // 新用户，创建存档
      record = this.userRepo.create({ openid, maxLevel });
      record = await this.userRepo.save(record);
    }
    return record;
  }

  /** 获取所有玩家记录（管理后台用） */
  async findAll(page = 1, pageSize = 10): Promise<{ list: UserRecord[]; total: number }> {
    const [list, total] = await this.userRepo.findAndCount({
      skip: (page - 1) * pageSize,
      take: pageSize,
      order: { maxLevel: 'DESC' },
    });
    return { list, total };
  }
}
