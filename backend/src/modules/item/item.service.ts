import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ItemInfo } from '../../entities/item-info.entity';

/** 食材服务 - 获取全量食材配置 */
@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(ItemInfo)
    private readonly itemRepo: Repository<ItemInfo>,
  ) {}

  /** 获取全部食材 */
  async findAll(): Promise<ItemInfo[]> {
    return this.itemRepo.find();
  }

  /** 新增/修改食材 */
  async save(itemKey: string, resPath: string): Promise<ItemInfo> {
    let item = await this.itemRepo.findOneBy({ itemKey });
    if (item) {
      item.resPath = resPath;
    } else {
      item = this.itemRepo.create({ itemKey, resPath });
    }
    return this.itemRepo.save(item);
  }

  /** 删除食材 */
  async remove(itemKey: string): Promise<void> {
    await this.itemRepo.delete({ itemKey });
  }
}
