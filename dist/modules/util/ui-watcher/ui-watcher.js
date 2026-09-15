// UI WATCHER :
export class UIWatcher {
    static watchers = new Map();
    static watch = (value, callback) => {
        const state = {
            value
        };
        const proxy = new Proxy(state, {
            set: (target, property, newValue) => {
                const oldValue = target[property];
                target[property] = newValue;
                if (oldValue !== newValue) {
                    UIWatcher.watchers.get(proxy)?.(newValue);
                }
                return true;
            }
        });
        UIWatcher.watchers.set(proxy, callback);
        return proxy;
    };
    static unwatch = (value) => {
        UIWatcher.watchers.delete(value);
    };
}
;
//# sourceMappingURL=ui-watcher.js.map