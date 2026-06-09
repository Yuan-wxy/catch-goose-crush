import { ItemService } from './item.service';
import { Result } from '../../common/result';
export declare class ItemController {
    private readonly itemService;
    constructor(itemService: ItemService);
    getAllItems(): Promise<Result<import("../../entities/item-info.entity").ItemInfo[]>>;
}
