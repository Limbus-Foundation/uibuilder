import { UIGeneric } from "../ui-generic/ui-generic.js";
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
export declare class UIIcon extends UIGeneric {
    private element;
    constructor(option: IUIcon);
}
