import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LevelConfig } from '../../entities/level-config.entity';
import { ItemInfo } from '../../entities/item-info.entity';
import { UserRecord } from '../../entities/user-record.entity';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';

@Module({
  imports: [TypeOrmModule.forFeature([LevelConfig, ItemInfo, UserRecord])],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
