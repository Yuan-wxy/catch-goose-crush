import { AdminService } from './admin.service';
import { Result } from '../../common/result';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    saveLevel(body: {
        levelNo: number;
        itemTypeList: string[];
        itemTotal: number;
    }): Promise<Result<import("../../entities/level-config.entity").LevelConfig>>;
    getLevelList(page?: number, pageSize?: number): Promise<Result<{
        list: import("../../entities/level-config.entity").LevelConfig[];
        total: number;
    }>>;
    deleteLevel(levelNo: string): Promise<Result<any>>;
    saveItem(body: {
        itemKey: string;
        resPath: string;
    }): Promise<Result<import("../../entities/item-info.entity").ItemInfo>>;
    deleteItem(itemKey: string): Promise<Result<any>>;
    getPlayerStats(page?: number, pageSize?: number): Promise<Result<{
        list: import("../../entities/user-record.entity").UserRecord[];
        total: number;
    }>>;
    login(body: {
        username: string;
        password: string;
    }): Promise<Result<any>>;
}
