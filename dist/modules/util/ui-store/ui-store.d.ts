export declare class UIStore<T extends object> {
    get: T;
    constructor(get: T);
    static set: <T_1 extends object>(initial: T_1) => UIStore<T_1>;
}
