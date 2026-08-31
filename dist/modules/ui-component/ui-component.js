// UI COMPONENT :
export function UIComponent(build) {
    return (initialState = {}) => {
        let state = { ...initialState };
        const listeners = [];
        const self = {
            stateListen: (callback) => {
                listeners.push(callback);
            }
        };
        const component = build(state, self);
        const result = component;
        result.state = (value) => {
            state = { ...state, ...value };
            for (const listener of listeners) {
                listener(state);
            }
        };
        return result;
    };
}
//# sourceMappingURL=ui-component.js.map