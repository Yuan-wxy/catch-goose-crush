export declare class Result<T = any> {
    code: number;
    msg: string;
    data: T;
    constructor(code: number, msg: string, data?: T);
    static success<T>(data?: T, msg?: string): Result<T>;
    static fail(msg?: string, code?: number): Result;
}
