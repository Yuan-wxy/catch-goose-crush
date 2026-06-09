import { Controller, Get, Param } from '@nestjs/common';
import { LevelService } from './level.service';
import { Result } from '../../common/result';

/** 关卡控制器 - GET /api/level/get/:levelNo */
@Controller('level')
export class LevelController {
  constructor(private readonly levelService: LevelService) {}

  /** 获取单关卡配置 */
  @Get('get/:levelNo')
  async getLevel(@Param('levelNo') levelNo: string) {
    const data = await this.levelService.getLevelByNo(parseInt(levelNo, 10));
    return Result.success(data);
  }
}
