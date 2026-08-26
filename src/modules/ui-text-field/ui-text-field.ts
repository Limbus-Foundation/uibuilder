// UI TEXT FIELD :

import { UIGeneric } from "../ui-generic/ui-generic.js";

export interface IUITextField {
    id?: string;
    placeholder?: string;
    value?: string;
    type?: "text" | "password" | "number";
    classList?: string[];
    className?: string;
    attribute?: { name: string; value: string }[];
}

/**
 * 
 * #### UIBuilder.UITextField
 * 
 * Wrapper class for creating and managing an `HTMLInputElement`.
 *
 * @param option - Configuration object to initialize the input element.
 * @param option.id - Unique ID for the HTML element.
 * @param option.placeholder - Placeholder text.
 * @param option.value - Default input value.
 * @param option.type - Input type (`text`, `password`, or `number`).
 * @param option.className - Single class name string.
 * @param option.classList - List of CSS class names.
 * @param option.attribute - Custom HTML attributes list.
 *
 * @example
 * ```ts
 * const password = new UITextField({ value: "1234", type: "password", id: "myId" });
 * ```
 */
export class UITextField extends UIGeneric {

    private element: HTMLInputElement;

    constructor(option?: IUITextField) {

        const element = document.createElement("input");

        super(element);

        this.element = element;

        this.element.type = option?.type || "text";

        if (option?.id) this.element.id = option.id;
        if (option?.placeholder) this.element.placeholder = option.placeholder;
        if (option?.value) this.element.value = option.value;
        if (option?.className) this.element.className = option.className;

        if (option?.classList?.length) {
            this.element.classList.add(...option.classList);
        }

        if (option?.attribute) {
            option.attribute.forEach(({ name, value }) => {
                this.element.setAttribute(name, value);
            });
        }
    }

    public value = (val?: string): string => {
        if (val !== undefined) this.element.value = val;
        return this.element.value;
    };

    public placeholder = (ph: string): void => void (this.element.placeholder = ph);

    public disable = (state: boolean): void => void (this.element.disabled = state);

}