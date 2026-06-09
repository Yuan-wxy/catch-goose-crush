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
exports.UserRecord = void 0;
const typeorm_1 = require("typeorm");
let UserRecord = class UserRecord {
};
exports.UserRecord = UserRecord;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'varchar', length: 64, comment: '微信唯一标识' }),
    __metadata("design:type", String)
], UserRecord.prototype, "openid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0, comment: '已通关最高关卡' }),
    __metadata("design:type", Number)
], UserRecord.prototype, "maxLevel", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], UserRecord.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], UserRecord.prototype, "updatedAt", void 0);
exports.UserRecord = UserRecord = __decorate([
    (0, typeorm_1.Entity)('user_record')
], UserRecord);
//# sourceMappingURL=user-record.entity.js.map