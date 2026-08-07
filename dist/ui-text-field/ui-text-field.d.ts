export interface IUITextField {
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
export declare class UITextField {
    private element;
    constructor(option?: IUITextField);
    id: (id: string) => void;
    className: (className: string) => void;
    classList: (classList: string[]) => void;
    attribute: (name: string, value: string) => void;
    removeAttribute: (attribute: string) => void;
    removeClassName: (className: string) => void;
    value: (val?: string) => string;
    placeholder: (ph: string) => void;
    disable: (state: boolean) => void;
    clear: () => void;
    get: () => HTMLInputElement;
}
