import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './config/database.config';
import { RedisModule } from './modules/redis/redis.module';
import { LevelModule } from './modules/level/level.module';
import { UserModule } from './modules/user/user.module';
import { ItemModule } from './modules/item/item.module';
import { AdminModule } from './modules/admin/admin.module';

@Module({
  imports: [
    // MySQL数据库连接
    TypeOrmModule.forRoot(databaseConfig),
    // Redis缓存模块
    RedisModule,
    // 业务模块
    LevelModule,
    UserModule,
    ItemModule,
    AdminModule,
  ],
})
export class AppModule {}
