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
exports.ItemService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const item_info_entity_1 = require("../../entities/item-info.entity");
let ItemService = class ItemService {
    constructor(itemRepo) {
        this.itemRepo = itemRepo;
    }
    async findAll() {
        return this.itemRepo.find();
    }
    async save(itemKey, resPath) {
        let item = await this.itemRepo.findOneBy({ itemKey });
        if (item) {
            item.resPath = resPath;
        }
        else {
            item = this.itemRepo.create({ itemKey, resPath });
        }
        return this.itemRepo.save(item);
    }
    async remove(itemKey) {
        await this.itemRepo.delete({ itemKey });
    }
};
exports.ItemService = ItemService;
exports.ItemService = ItemService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(item_info_entity_1.ItemInfo)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ItemService);
//# sourceMappingURL=item.service.js.map