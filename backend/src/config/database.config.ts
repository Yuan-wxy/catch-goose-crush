import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { LevelConfig } from '../entities/level-config.entity';
import { UserRecord } from '../entities/user-record.entity';
import { ItemInfo } from '../entities/item-info.entity';

/** 数据库与Redis连接配置 */
export const databaseConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT, 10) || 3306,
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '123456',
  database: process.env.DB_NAME || 'goose_game',
  entities: [LevelConfig, UserRecord, ItemInfo],
  synchronize: false, // 生产环境禁止自动同步，使用SQL脚本初始化
  logging: true,
};

/** Redis连接配置 */
export const redisConfig = {
  host: process.env.REDIS_HOST || 'localhost',
  port: parseInt(process.env.REDIS_PORT, 10) || 6379,
  password: process.env.REDIS_PASS || '',
  db: parseInt(process.env.REDIS_DB, 10) || 0,
};
