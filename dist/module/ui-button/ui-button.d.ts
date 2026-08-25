import { UIAppend } from "../ui-append/ui-append.js";
import { UIBlend } from "../ui-blend/ui-blend.js";
import { UIElement } from "../ui-element/ui-element.js";
export interface IUIButton {
    id?: string;
    classList?: string[];
    className?: string;
    attribute?: {
        name: string;
        value: string;
    }[];
    text?: string;
    label?: string;
}
/**
 *
 * #### UIBuilder.UIButton
 *
 * Wrapper class for creating and managing an `HtmlButtonElement `.
 *
 * @param option - Configuration object to initialize the input element.
 * @param option.id - Unique ID for the HTML element.
 * @param option.className - Single class name string.
 * @param option.classList - List of CSS class names.
 * @param option.attribute - Custom HTML attributes list.
 * @param option.text - Button label
 * @param option.label - Button label
 *
 * @example
 * ```ts
 * const btn = new UIButton({ text : "label" });
 * ```
 * @public
 */
export declare class UIButton {
    private element;
    constructor(option: IUIButton);
    id: (id: string) => void;
    className: (className: string) => void;
    classList: (classList: string[]) => void;
    attribute: (name: string, value: string) => void;
    removeAttribute: (attribute: string) => void;
    removeClassName: (className: string) => void;
    text: (text: string) => void;
    label: (label: string) => void;
    append: (element: UIElement | UIBlend) => UIAppend;
    prepend: (element: UIElement | UIBlend) => UIAppend;
    remove: () => void;
    clear: () => string;
    get: () => HTMLElement;
}
