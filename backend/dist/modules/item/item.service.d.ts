import { Repository } from 'typeorm';
import { ItemInfo } from '../../entities/item-info.entity';
export declare class ItemService {
    private readonly itemRepo;
    constructor(itemRepo: Repository<ItemInfo>);
    findAll(): Promise<ItemInfo[]>;
    save(itemKey: string, resPath: string): Promise<ItemInfo>;
    remove(itemKey: string): Promise<void>;
}
