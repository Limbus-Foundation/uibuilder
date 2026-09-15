
// UI SWITCHER : 

import { UIElement } from "../../internal/ui-element/ui-element.js";

type SwitchListType = Record<string, UIElement>

export class UISwitcher {

    private switcherRoot: UIElement | null = null;
    private switchList: SwitchListType = {};

    public register = (switchList: SwitchListType): void => {
        this.switchList = switchList;
    };

    public root = (switcherRoot: UIElement): void => {
        this.switcherRoot = switcherRoot;
    };

    public switch = (switchTab: UIElement): void => {
        if (this.switcherRoot) {
            Object.values(this.switchList).forEach(element => {
                if (element.__getIsRendered()) this.switcherRoot?.unrender(element);
                if (element === switchTab) this.switcherRoot?.render(element);
            });
        };
    };
};