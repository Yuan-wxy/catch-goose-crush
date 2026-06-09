import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { Result } from '../../common/result';

/** 用户控制器 - POST /api/user/saveRecord */
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /** 提交玩家通关存档 */
  @Post('saveRecord')
  async saveRecord(@Body() body: { openid: string; maxLevel: number }) {
    const data = await this.userService.saveRecord(body.openid, body.maxLevel);
    return Result.success(data);
  }
}
