export interface Result<T> {
    ok: boolean;
    data?: T;
    error?: any;
}