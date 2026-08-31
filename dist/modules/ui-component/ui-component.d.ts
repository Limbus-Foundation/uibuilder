export declare function UIComponent<T extends object, P extends Record<string, any>>(build: (props: P, self: {
    stateListen: (callback: (state: P) => void) => void;
}) => T): (props?: Partial<P>) => T & {
    state(state: Partial<P>): void;
};
