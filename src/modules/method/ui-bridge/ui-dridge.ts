
// UI BRIDGE :

import { UIElement } from "../../internal/ui-element/ui-element.js";

export type BridgeType = Record<string, UIElement>;

export class UIBridge<T extends BridgeType> { 

    constructor(UIElementList: T) {
        Object.assign(this, UIElementList);
    };

};