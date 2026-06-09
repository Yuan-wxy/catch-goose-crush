import { OnModuleDestroy } from '@nestjs/common';
export declare class RedisService implements OnModuleDestroy {
    private readonly client;
    constructor();
    get(key: string): Promise<string | null>;
    set(key: string, value: string, expireSec?: number): Promise<void>;
    del(key: string): Promise<void>;
    onModuleDestroy(): void;
}
