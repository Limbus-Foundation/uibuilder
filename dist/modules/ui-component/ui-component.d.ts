export declare class UIComponent {
    static build<T, P extends any[]>(build: (...props: P) => T): (...props: Partial<P>) => T;
}
