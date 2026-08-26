// UI WATCHER :
import { UIStore } from "../ui-store/ui-store.js";
export class UIWatcher {
    static watchers = new Map();
    static watch = (value, callback) => {
        if (value instanceof UIStore) {
            const proxy = new Proxy(value.get, {
                set: (target, property, newValue) => {
                    const oldValue = target[property];
                    target[property] = newValue;
                    if (oldValue !== newValue) {
                        UIWatcher.watchers.get(proxy)?.(proxy);
                    }
                    return true;
                }
            });
            value.get = proxy;
            UIWatcher.watchers.set(proxy, callback);
            return proxy;
        }
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
//# sourceMappingURL=ui-watcher.js.map