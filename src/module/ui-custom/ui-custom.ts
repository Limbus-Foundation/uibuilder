
// UI CUSTOM : 

import { UIElement } from "../ui-element/ui-element.js";

export interface IUICustom {
    id?: string;
    classList?: string[];
    className?: string;
    attribute?: { name: string; value: string }[];
    tag : keyof HTMLMapElement
};

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
export class UICustom {

    private element: HTMLElement;

    constructor(option: IUICustom) {

        this.element = document.createElement(option.tag);

        if (option.id) this.element.id = option.id;
        
        if (option.className) this.element.className = option.className;

        if (option.classList && option.classList.length > 0) {
            this.element.classList.add(...option.classList);
        };

        if (option?.attribute) {
            Object.entries(option.attribute).forEach(([name, value]: [string, any]) => {
                this.element.setAttribute(name, String(value));
            });
        }
    };

    public id = (id: string): void => void (this.element.id = id);
    public className = (className: string): void => void (this.element.className = className);
    public classList = (classList: string[]): void => this.element.classList.add(...classList);
    public attribute = (name: string, value: string): void => this.element.setAttribute(name, value);
    public removeAttribute = ( attribute : string ) : void => void (this.element.removeAttribute(attribute));
    public removeClassName = ( className : string ) : void => void ( this.element.classList.remove(className));

    public append = (element: UIElement): void => this.element.append(element.get());
    public remove = (): void => this.element.remove();
    public clear = (): string => (this.element.innerHTML = "");
    public get = (): HTMLElement => this.element;
};