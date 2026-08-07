export interface IUISlider {
    id?: string;
    placeholder?: string;
    value?: string;
    classList?: string[];
    className?: string;
    attribute?: {
        name: string;
        value: string;
    }[];
}
/**
 *
 * #### UIBuilder.UISlider
 *
 * Wrapper class for creating and managing an `HTMLInputElement`.
 *
 * @param option - Configuration object to initialize the input element.
 * @param option.id - Unique ID for the HTML element.
 * @param option.value - Default input value.
 * @param option.className - Single class name string.
 * @param option.classList - List of CSS class names.
 * @param option.attribute - Custom HTML attributes list.
 *
 * @example
 * ```ts
 * const slide = new UISlider({ value: "id_string", className: "class_string" });
 * ```
 */
export declare class UISlider {
    private element;
    constructor(option?: IUISlider);
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
