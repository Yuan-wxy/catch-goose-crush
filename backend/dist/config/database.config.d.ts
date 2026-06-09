import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export declare const databaseConfig: TypeOrmModuleOptions;
export declare const redisConfig: {
    host: string;
    port: number;
    password: string;
    db: number;
};
