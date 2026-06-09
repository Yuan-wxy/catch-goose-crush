import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemInfo } from '../../entities/item-info.entity';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';

@Module({
  imports: [TypeOrmModule.forFeature([ItemInfo])],
  controllers: [ItemController],
  providers: [ItemService],
})
export class ItemModule {}
