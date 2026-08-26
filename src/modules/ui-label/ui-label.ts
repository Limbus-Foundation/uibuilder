// UI LABEL : 

import { UIGeneric } from "../ui-generic/ui-generic.js";

export interface IUILabel {
    id?: string;
    classList?: string[];
    className?: string;
    attribute?: { name: string; value: string }[];
    label?: string;
};

/**
 * 
 * #### UIBuilder.UILabel
 * 
 * Wrapper class for creating and managing an `HTMLSpanElement`.
 *
 * @param option - Configuration object to initialize the input element.
 * @param option.id - Unique ID for the HTML element.
 * @param option.className - Single class name string.
 * @param option.classList - List of CSS class names.
 * @param option.attribute - Custom HTML attributes list.
 * @param option.label - label text.
 *
 * @example
 * ```ts
 * const label = new UILabel({ label : "hello_world" });
 * ```
 * @public
 */
export class UILabel extends UIGeneric {

    private element: HTMLSpanElement;

    constructor(option: IUILabel) {

        const element = document.createElement("span");

        super(element);

        this.element = element;

        if (option.id) this.element.id = option.id;

        if (option.className) this.element.className = option.className;

        if (option.classList?.length) {
            this.element.classList.add(...option.classList);
        }

        if (option.label) this.element.textContent = option.label;

        if (option.attribute) {
            Object.entries(option.attribute).forEach(([name, value]) => {
                this.element.setAttribute(name, String(value));
            });
        }
    }

    public label = (label: string): void => void (this.element.textContent = label);
}