"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const level_config_entity_1 = require("../../entities/level-config.entity");
const item_info_entity_1 = require("../../entities/item-info.entity");
const user_record_entity_1 = require("../../entities/user-record.entity");
const redis_service_1 = require("../redis/redis.service");
let AdminService = class AdminService {
    constructor(levelRepo, itemRepo, userRepo, redisService) {
        this.levelRepo = levelRepo;
        this.itemRepo = itemRepo;
        this.userRepo = userRepo;
        this.redisService = redisService;
    }
    async saveLevel(body) {
        let level = await this.levelRepo.findOneBy({ levelNo: body.levelNo });
        if (level) {
            level.itemTypeList = body.itemTypeList;
            level.itemTotal = body.itemTotal;
        }
        else {
            level = this.levelRepo.create(body);
        }
        const saved = await this.levelRepo.save(level);
        await this.redisService.del(`level:cfg:${body.levelNo}`);
        return saved;
    }
    async getLevelList(page, pageSize) {
        const [list, total] = await this.levelRepo.findAndCount({
            skip: (page - 1) * pageSize,
            take: pageSize,
            order: { levelNo: 'ASC' },
        });
        return { list, total };
    }
    async deleteLevel(levelNo) {
        await this.levelRepo.delete({ levelNo });
        await this.redisService.del(`level:cfg:${levelNo}`);
    }
    async saveItem(body) {
        let item = await this.itemRepo.findOneBy({ itemKey: body.itemKey });
        if (item) {
            item.resPath = body.resPath;
        }
        else {
            item = this.itemRepo.create(body);
        }
        return this.itemRepo.save(item);
    }
    async deleteItem(itemKey) {
        await this.itemRepo.delete({ itemKey });
    }
    async getPlayerStats(page, pageSize) {
        const [list, total] = await this.userRepo.findAndCount({
            skip: (page - 1) * pageSize,
            take: pageSize,
            order: { maxLevel: 'DESC' },
        });
        return { list, total };
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(level_config_entity_1.LevelConfig)),
    __param(1, (0, typeorm_1.InjectRepository)(item_info_entity_1.ItemInfo)),
    __param(2, (0, typeorm_1.InjectRepository)(user_record_entity_1.UserRecord)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        redis_service_1.RedisService])
], AdminService);
//# sourceMappingURL=admin.service.js.map