import { UIAppend } from "../ui-append/ui-append.js";
import { UIBlend } from "../ui-blend/ui-blend.js";
import { UIElement } from "../ui-element/ui-element.js";
export interface IUIIconButton {
    id?: string;
    classList?: string[];
    className?: string;
    attribute?: {
        name: string;
        value: string;
    }[];
    iconClassName: string;
    label?: string;
}
/**
 *
 * #### UIBuilder.UIIconButton
 *
 * Wrapper class for creating and managing an `HtmlButtonElment && HtmlElement -> <i>`.
 *
 * @param option - Configuration object to initialize the input element.
 * @param option.id - Unique ID for the HTML element.
 * @param option.className - Single class name string.
 * @param option.classList - List of CSS class names.
 * @param option.attribute - Custom HTML attributes list.
 * @param option.iconClassName - Button icon class string.
 *
 * @example
 * ```ts
 * const buttonIcon = new UIIconButton({ className : "icon_class_name" });
 * ```
 * @public
 */
export declare class UIIconButton {
    private element;
    constructor(option: IUIIconButton);
    private setIcon;
    id: (id: string) => void;
    className: (className: string) => void;
    icon: (iconClassName: string, label?: string) => void;
    classList: (classList: string[]) => void;
    attribute: (name: string, value: string) => void;
    removeAttribute: (attribute: string) => void;
    removeClassName: (className: string) => void;
    append: (element: UIElement | UIBlend) => UIAppend;
    prepend: (element: UIElement | UIBlend) => UIAppend;
    remove: () => void;
    get: () => HTMLElement;
}
