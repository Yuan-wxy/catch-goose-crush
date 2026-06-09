import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LevelConfig } from '../../entities/level-config.entity';
import { LevelController } from './level.controller';
import { LevelService } from './level.service';

@Module({
  imports: [TypeOrmModule.forFeature([LevelConfig])],
  controllers: [LevelController],
  providers: [LevelService],
})
export class LevelModule {}
