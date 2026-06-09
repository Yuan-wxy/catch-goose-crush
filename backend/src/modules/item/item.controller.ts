import { Controller, Get } from '@nestjs/common';
import { ItemService } from './item.service';
import { Result } from '../../common/result';

/** 食材控制器 - GET /api/item/all */
@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  /** 获取全量食材配置 */
  @Get('all')
  async getAllItems() {
    const data = await this.itemService.findAll();
    return Result.success(data);
  }
}
