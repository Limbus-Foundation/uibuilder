
// UI BLEND

import { UIElement } from './../ui-element/ui-element.js';

export class UIBlend extends Array<UIElement> {

    constructor(...elements: UIElement[]) {
        super(...elements);
    }
}