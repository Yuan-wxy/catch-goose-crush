"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisConfig = exports.databaseConfig = void 0;
const level_config_entity_1 = require("../entities/level-config.entity");
const user_record_entity_1 = require("../entities/user-record.entity");
const item_info_entity_1 = require("../entities/item-info.entity");
exports.databaseConfig = {
    type: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 3306,
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '123456',
    database: process.env.DB_NAME || 'goose_game',
    entities: [level_config_entity_1.LevelConfig, user_record_entity_1.UserRecord, item_info_entity_1.ItemInfo],
    synchronize: false,
    logging: true,
};
exports.redisConfig = {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT, 10) || 6379,
    password: process.env.REDIS_PASS || '',
    db: parseInt(process.env.REDIS_DB, 10) || 0,
};
//# sourceMappingURL=database.config.js.map