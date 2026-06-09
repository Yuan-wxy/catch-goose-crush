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
exports.LevelConfig = void 0;
const typeorm_1 = require("typeorm");
let LevelConfig = class LevelConfig {
};
exports.LevelConfig = LevelConfig;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'int', comment: '关卡编号' }),
    __metadata("design:type", Number)
], LevelConfig.prototype, "levelNo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', comment: '食材类型数组' }),
    __metadata("design:type", Array)
], LevelConfig.prototype, "itemTypeList", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', comment: '本关食材总数' }),
    __metadata("design:type", Number)
], LevelConfig.prototype, "itemTotal", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], LevelConfig.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], LevelConfig.prototype, "updatedAt", void 0);
exports.LevelConfig = LevelConfig = __decorate([
    (0, typeorm_1.Entity)('level_config')
], LevelConfig);
//# sourceMappingURL=level-config.entity.js.map