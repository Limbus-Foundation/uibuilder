import { UIGeneric } from "../ui-generic/ui-generic.js";
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
 * Wrapper class for creating and managing an `HtmlButtonElement && HtmlElement -> <i>`.
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
export declare class UIIconButton extends UIGeneric {
    private element;
    constructor(option: IUIIconButton);
    private setIcon;
    icon: (iconClassName: string, label?: string) => void;
}
