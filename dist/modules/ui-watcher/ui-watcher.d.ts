export type UIWatcherCallback<T> = (value: T) => void;
export declare class UIWatcher {
    private static watchers;
    static watch: <T>(value: T, callback: UIWatcherCallback<T>) => any;
    static unwatch: <T>(value: T) => void;
}
