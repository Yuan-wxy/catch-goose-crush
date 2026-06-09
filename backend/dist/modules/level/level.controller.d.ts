import { LevelService } from './level.service';
import { Result } from '../../common/result';
export declare class LevelController {
    private readonly levelService;
    constructor(levelService: LevelService);
    getLevel(levelNo: string): Promise<Result<import("../../entities/level-config.entity").LevelConfig>>;
}
