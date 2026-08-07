import { UIElement } from "../ui-element/ui-element.js";
export interface IUIcon {
    id?: string;
    classList?: string[];
    className?: string;
    attribute?: {
        name: string;
        value: string;
    }[];
}
/**
 *
 * #### UIBuilder.UIIcon
 *
 * Wrapper class for creating and managing an `HTMLElement -> <i>`.
 *
 * @param option - Configuration object to initialize the input element.
 * @param option.id - Unique ID for the HTML element.
 * @param option.className - Single class name string.
 * @param option.classList - List of CSS class names.
 * @param option.attribute - Custom HTML attributes list.
 *
 * @example
 * ```ts
 * const icon = new UIIcon({ className : "icon_class_name" });
 * ```
 * @public
 */
export declare class UIIcon {
    private element;
    constructor(option: IUIcon);
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
