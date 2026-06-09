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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemInfo = void 0;
const typeorm_1 = require("typeorm");
let ItemInfo = class ItemInfo {
};
exports.ItemInfo = ItemInfo;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'varchar', length: 64, comment: '食材唯一ID' }),
    __metadata("design:type", String)
], ItemInfo.prototype, "itemKey", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, comment: '模型资源地址' }),
    __metadata("design:type", String)
], ItemInfo.prototype, "resPath", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], ItemInfo.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], ItemInfo.prototype, "updatedAt", void 0);
exports.ItemInfo = ItemInfo = __decorate([
    (0, typeorm_1.Entity)('item_info')
], ItemInfo);
//# sourceMappingURL=item-info.entity.js.map