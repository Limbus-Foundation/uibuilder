import { UIElement } from "../ui-element/ui-element.js";
export interface IUILabel {
    id?: string;
    classList?: string[];
    className?: string;
    attribute?: {
        name: string;
        value: string;
    }[];
    label?: string;
}
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
export declare class UILabel {
    private element;
    constructor(option: IUILabel);
    id: (id: string) => void;
    className: (className: string) => void;
    classList: (classList: string[]) => void;
    attribute: (name: string, value: string) => void;
    removeAttribute: (attribute: string) => void;
    removeClassName: (className: string) => void;
    label: (label: string) => void;
    append: (element: UIElement) => void;
    remove: () => void;
    clear: () => string;
    get: () => HTMLElement;
}
