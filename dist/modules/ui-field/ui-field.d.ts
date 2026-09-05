import { UIGeneric } from "../ui-generic/ui-generic.js";
export interface IUIField {
    id?: string;
    placeholder?: string;
    value?: string;
    type?: "text" | "password" | "number";
    classList?: string[];
    className?: string;
    attribute?: {
        name: string;
        value: string;
    }[];
}
/**
 *
 * #### UIBuilder.UIField
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
 * const password = new UIField({ value: "1234", type: "password", id: "myId" });
 * ```
 */
export declare class UIField extends UIGeneric {
    private element;
    constructor(option?: IUIField);
    value: (val?: string) => string;
    placeholder: (ph: string) => void;
    disable: (state: boolean) => void;
}
