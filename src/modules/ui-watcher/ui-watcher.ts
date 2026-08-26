// UI WATCHER :

import { UIStore } from "../ui-store/ui-store.js";

export type UIWatcherCallback<T> = (value: T) => void;

export class UIWatcher {

    private static watchers = new Map<object, UIWatcherCallback<any>>();

    public static watch = <T>(value: T, callback: UIWatcherCallback<T>) => {

        if (value instanceof UIStore) {

            const proxy = new Proxy(value.get, {
                set: (target, property, newValue) => {

                    const oldValue = target[property as keyof T];

                    target[property as keyof T] = newValue;

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

                const oldValue = target[property as keyof typeof target];

                target[property as keyof typeof target] = newValue;

                if (oldValue !== newValue) {
                    UIWatcher.watchers.get(proxy)?.(newValue);
                }

                return true;
            }
        });

        UIWatcher.watchers.set(proxy, callback);

        return proxy;
    };

    public static unwatch = <T>(value: T): void => {
        UIWatcher.watchers.delete(value as object);
    };

}