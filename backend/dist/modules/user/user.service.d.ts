import { Repository } from 'typeorm';
import { UserRecord } from '../../entities/user-record.entity';
export declare class UserService {
    private readonly userRepo;
    constructor(userRepo: Repository<UserRecord>);
    saveRecord(openid: string, maxLevel: number): Promise<UserRecord>;
    findAll(page?: number, pageSize?: number): Promise<{
        list: UserRecord[];
        total: number;
    }>;
}
