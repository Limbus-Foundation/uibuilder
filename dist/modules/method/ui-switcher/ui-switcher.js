// UI SWITCHER : 
export class UISwitcher {
    switcherRoot = null;
    switchList = {};
    register = (switchList) => {
        this.switchList = switchList;
    };
    root = (switcherRoot) => {
        this.switcherRoot = switcherRoot;
    };
    switch = (switchTab) => {
        if (this.switcherRoot) {
            Object.values(this.switchList).forEach(element => {
                if (element.__getIsRendered())
                    this.switcherRoot?.unrender(element);
                if (element === switchTab)
                    this.switcherRoot?.render(element);
            });
        }
        ;
    };
}
;
//# sourceMappingURL=ui-switcher.js.map