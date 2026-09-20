
// UI BRIDGE :

import { UIElement } from "../../internal/ui-element/ui-element.js";

export type BridgeType = Record<string, UIElement>;

export class UIBridge {

    constructor(UIElementList: BridgeType) {
        Object.assign(this, UIElementList);
    };

};