import { UIElement } from "../ui-element/ui-element.js";
export interface IUICustom {
    id?: string;
    classList?: string[];
    className?: string;
    attribute?: {
        name: string;
        value: string;
    }[];
    tag: keyof HTMLMapElement;
}
/**
 *
 * #### UIBuilder.UICustom
 *
 * Wrapper class for creating and managing an `HTMLElement `.
 *
 * @param option - Configuration object to initialize the input element.
 * @param option.id - Unique ID for the HTML element.
 * @param option.className - Single class name string.
 * @param option.classList - List of CSS class names.
 * @param option.attribute - Custom HTML attributes list.
 * @param option.tag - HTML tag name
 *
 * @example
 * ```ts
 * const element = new UICustom({ tag : "div" });
 * ```
 * @public
 */
export declare class UICustom {
    private element;
    constructor(option: IUICustom);
    id: (id: string) => void;
    className: (className: string) => void;
    classList: (classList: string[]) => void;
    attribute: (name: string, value: string) => void;
    removeAttribute: (attribute: string) => void;
    removeClassName: (className: string) => void;
    append: (element: UIElement) => void;
    remove: () => void;
    clear: () => string;
    get: () => HTMLElement;
}
