import { UIElement } from "../../internal/ui-element/ui-element.js";
export type BridgeType = Record<string, UIElement>;
export declare class UIBridge {
    constructor(UIElementList: BridgeType);
}
