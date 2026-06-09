import { Controller, Post, Body, Get, Query, Delete, Param } from '@nestjs/common';
import { AdminService } from './admin.service';
import { Result } from '../../common/result';

/** 后台管理控制器 - POST /api/admin/level/save 等 */
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  /** 新增/修改关卡数据 */
  @Post('level/save')
  async saveLevel(
    @Body() body: { levelNo: number; itemTypeList: string[]; itemTotal: number },
  ) {
    const data = await this.adminService.saveLevel(body);
    return Result.success(data);
  }

  /** 获取关卡列表（分页） */
  @Get('level/list')
  async getLevelList(@Query('page') page = 1, @Query('pageSize') pageSize = 10) {
    const data = await this.adminService.getLevelList(Number(page), Number(pageSize));
    return Result.success(data);
  }

  /** 删除关卡 */
  @Delete('level/:levelNo')
  async deleteLevel(@Param('levelNo') levelNo: string) {
    await this.adminService.deleteLevel(Number(levelNo));
    return Result.success(null, '删除成功');
  }

  /** 新增/修改食材 */
  @Post('item/save')
  async saveItem(@Body() body: { itemKey: string; resPath: string }) {
    const data = await this.adminService.saveItem(body);
    return Result.success(data);
  }

  /** 删除食材 */
  @Delete('item/:itemKey')
  async deleteItem(@Param('itemKey') itemKey: string) {
    await this.adminService.deleteItem(itemKey);
    return Result.success(null, '删除成功');
  }

  /** 玩家数据统计（分页） */
  @Get('player/stats')
  async getPlayerStats(@Query('page') page = 1, @Query('pageSize') pageSize = 10) {
    const data = await this.adminService.getPlayerStats(Number(page), Number(pageSize));
    return Result.success(data);
  }

  /** 管理员登录（硬编码） */
  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    if (body.username === 'admin' && body.password === 'admin123') {
      return Result.success({ token: 'goose-admin-token-' + Date.now() }, '登录成功');
    }
    return Result.fail('账号或密码错误', 401);
  }
}
