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
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const admin_service_1 = require("./admin.service");
const result_1 = require("../../common/result");
let AdminController = class AdminController {
    constructor(adminService) {
        this.adminService = adminService;
    }
    async saveLevel(body) {
        const data = await this.adminService.saveLevel(body);
        return result_1.Result.success(data);
    }
    async getLevelList(page = 1, pageSize = 10) {
        const data = await this.adminService.getLevelList(Number(page), Number(pageSize));
        return result_1.Result.success(data);
    }
    async deleteLevel(levelNo) {
        await this.adminService.deleteLevel(Number(levelNo));
        return result_1.Result.success(null, '删除成功');
    }
    async saveItem(body) {
        const data = await this.adminService.saveItem(body);
        return result_1.Result.success(data);
    }
    async deleteItem(itemKey) {
        await this.adminService.deleteItem(itemKey);
        return result_1.Result.success(null, '删除成功');
    }
    async getPlayerStats(page = 1, pageSize = 10) {
        const data = await this.adminService.getPlayerStats(Number(page), Number(pageSize));
        return result_1.Result.success(data);
    }
    async login(body) {
        if (body.username === 'admin' && body.password === 'admin123') {
            return result_1.Result.success({ token: 'goose-admin-token-' + Date.now() }, '登录成功');
        }
        return result_1.Result.fail('账号或密码错误', 401);
    }
};
exports.AdminController = AdminController;
__decorate([
    (0, common_1.Post)('level/save'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "saveLevel", null);
__decorate([
    (0, common_1.Get)('level/list'),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('pageSize')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getLevelList", null);
__decorate([
    (0, common_1.Delete)('level/:levelNo'),
    __param(0, (0, common_1.Param)('levelNo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "deleteLevel", null);
__decorate([
    (0, common_1.Post)('item/save'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "saveItem", null);
__decorate([
    (0, common_1.Delete)('item/:itemKey'),
    __param(0, (0, common_1.Param)('itemKey')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "deleteItem", null);
__decorate([
    (0, common_1.Get)('player/stats'),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('pageSize')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getPlayerStats", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "login", null);
exports.AdminController = AdminController = __decorate([
    (0, common_1.Controller)('admin'),
    __metadata("design:paramtypes", [admin_service_1.AdminService])
], AdminController);
//# sourceMappingURL=admin.controller.js.map