import { UserService } from './user.service';
import { Result } from '../../common/result';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    saveRecord(body: {
        openid: string;
        maxLevel: number;
    }): Promise<Result<import("../../entities/user-record.entity").UserRecord>>;
}
