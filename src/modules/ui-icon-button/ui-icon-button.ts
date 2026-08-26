// UI ICON BUTTON : 

import { UIGeneric } from "../ui-generic/ui-generic.js";

export interface IUIIconButton {
    id?: string;
    classList?: string[];
    className?: string;
    attribute?: { name: string; value: string }[];
    iconClassName: string;
    label?: string;
};

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
export class UIIconButton extends UIGeneric {

    private element: HTMLButtonElement;

    constructor(option: IUIIconButton) {

        const element = document.createElement("button");

        super(element);

        this.element = element;

        if (option.id) this.element.id = option.id;

        if (option.classList?.length) {
            this.element.classList.add(...option.classList);
        }

        if (option.iconClassName) {
            this.setIcon(option.iconClassName, option.label || "");
        }

        if (option.className) this.element.className = option.className;

        if (option.attribute) {
            Object.entries(option.attribute).forEach(([name, value]) => {
                this.element.setAttribute(name, String(value));
            });
        }
    }

    private setIcon = (iconClassName: string, label: string): void => void (this.element.innerHTML = `<i class="${iconClassName}"></i> ${label}`);
    public icon = (iconClassName: string, label?: string): void => void (this.setIcon(iconClassName, label || ""));
}