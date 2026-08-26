// UI STORE :

export class UIStore<T extends object> {

    public constructor(
        public get: T
    ) {}

    public static set = <T extends object>(initial: T): UIStore<T> => {
        return new UIStore(initial);
    };

}