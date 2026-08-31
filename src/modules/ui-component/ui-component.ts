// UI COMPONENT :

export function UIComponent<T extends object, P extends Record<string, any>>(
    build: (
        props: P,
        self: {
            stateListen: (callback: (state: P) => void) => void;
        }
    ) => T
): (props?: Partial<P>) => T & {
    state(state: Partial<P>): void;
} {

    return (initialState = {}) => {

        let state = { ...initialState } as P;

        const listeners: ((state: P) => void)[] = [];

        const self = {
            stateListen: (callback: (state: P) => void) => {
                listeners.push(callback);
            }
        };

        const component = build(state, self); 

        const result = component as T & {
            state(state: Partial<P>): void;
        };

        result.state = (value) => {
            state = { ...state, ...value };

            for (const listener of listeners) {
                listener(state);
            }
        };

        return result;
    };
}