
// UI ICON BUTTON : 

import { UIElement } from "../ui-element/ui-element.js";

export interface IUIIconButton {
    id?: string;
    classList?: string[];
    className?: string;
    attribute?: { name: string; value: string }[];
    iconClassName : string,
    label ? : string
};

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
export class UIIconButton {

    private element: HTMLButtonElement;

    constructor(option: IUIIconButton) {

        this.element = document.createElement("button");

        if (option.id) this.element.id = option.id;

        if (option.classList && option.classList.length > 0) {
            this.element.classList.add(...option.classList);
        };

        if(option.iconClassName) this.setIcon(option.iconClassName,option.label || "");

        if(option.className) this.element.className = option.className;

        if (option?.attribute) {
            Object.entries(option.attribute).forEach(([name, value]: [string, any]) => {
                this.element.setAttribute(name, String(value));
            });
        }

    };

    private setIcon = ( iconClassName : string , label : string) : void => void (this.element.innerHTML = `<i class="${iconClassName}"></i> ${label}`);
    
    public id = (id: string): void => void (this.element.id = id);
    public className = (className: string): void => void (this.element.className = className);
    public icon = (iconClassName: string, label ? : string): void => void (this.setIcon(iconClassName,label || ""));
    public classList = (classList: string[]): void => this.element.classList.add(...classList);
    public attribute = (name: string, value: string): void => this.element.setAttribute(name, value);
    public removeAttribute = ( attribute : string ) : void => void (this.element.removeAttribute(attribute));
    public removeClassName = ( className : string ) : void => void ( this.element.classList.remove(className));

    public append = (element: UIElement): void => this.element.append(element.get());
    public remove = (): void => this.element.remove();
    public get = (): HTMLElement => this.element;

};