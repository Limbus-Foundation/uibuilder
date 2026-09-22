import { UIElement } from "../../internal/ui-element/ui-element.js";
export type BridgeType = Record<string, UIElement>;
export declare class UIBridge<T extends BridgeType> {
    constructor(UIElementList: T);
}
