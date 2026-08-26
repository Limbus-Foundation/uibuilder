// UI STORE :
export class UIStore {
    get;
    constructor(get) {
        this.get = get;
    }
    static set = (initial) => {
        return new UIStore(initial);
    };
}
//# sourceMappingURL=ui-store.js.map