import { UIAppend } from "../ui-append/ui-append.js";
import { UIBlend } from "../ui-blend/ui-blend.js";
import { UIElement } from "../ui-element/ui-element.js";
export interface IUIPanel {
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
 * #### UIBuilder.UIPanel
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
 * const panel = new UIPanel({ className : "class_name" });
 * ```
 * @public
 */
export declare class UIPanel {
    private element;
    constructor(option: IUIPanel);
    id: (id: string) => void;
    className: (className: string) => void;
    classList: (classList: string[]) => void;
    attribute: (name: string, value: string) => void;
    removeAttribute: (attribute: string) => void;
    removeClassName: (className: string) => void;
    append: (element: UIElement | UIBlend) => UIAppend;
    prepend: (element: UIElement | UIBlend) => UIAppend;
    remove: () => void;
    clear: () => string;
    get: () => HTMLElement;
}
