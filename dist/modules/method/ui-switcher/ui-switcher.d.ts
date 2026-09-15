import { UIElement } from "../../internal/ui-element/ui-element.js";
type SwitchListType = Record<string, UIElement>;
export declare class UISwitcher {
    private switcherRoot;
    private switchList;
    register: (switchList: SwitchListType) => void;
    root: (switcherRoot: UIElement) => void;
    switch: (switchTab: UIElement) => void;
}
export {};
