
// UI GROUP : 

import { UIGeneric } from "../ui-generic/ui-generic.js";

export interface IUIGroup {
    id?: string;
    classList?: string[];
    className?: string;
    attribute?: { name: string; value: string }[];
};

/**
 * 
 * #### UIBuilder.UIGroup
 * 
 * Wrapper class for creating and managing an `HTMLDivElement `.
 *
 * @param option - Configuration object to initialize the input element.
 * @param option.id - Unique ID for the HTML element.
 * @param option.className - Single class name string.
 * @param option.classList - List of CSS class names.
 * @param option.attribute - Custom HTML attributes list.
 *
 * @example
 * ```ts
 * const group = new UIGroup({ className : "class_name" });
 * ```
 * @public
 */
export class UIGroup extends UIGeneric {

    private element: HTMLDivElement;

    constructor(option: IUIGroup) {

        const element = document.createElement("div");

        super(element);

        this.element = element;

        if (option.id) this.element.id = option.id;

        if (option.className) this.element.className = option.className;

        if (option.classList?.length) {
            this.element.classList.add(...option.classList);
        }

        if (option.attribute) {
            option.attribute.forEach(({ name, value }) => {
                this.element.setAttribute(name, value);
            });
        }
    }
}