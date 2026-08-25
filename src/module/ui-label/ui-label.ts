
// UI LABEL : 

import { UIAppend } from "../ui-append/ui-append.js";
import { UIBlend } from "../ui-blend/ui-blend.js";
import { UIElement } from "../ui-element/ui-element.js";

export interface IUILabel {
    id?: string;
    classList?: string[];
    className?: string;
    attribute?: { name: string; value: string }[];
    label ? : string;
};

/**
 * 
 * #### UIBuilder.UILabel
 * 
 * Wrapper class for creating and managing an `HTMLSpanElement`.
 *
 * @param option - Configuration object to initialize the input element.
 * @param option.id - Unique ID for the HTML element.
 * @param option.className - Single class name string.
 * @param option.classList - List of CSS class names.
 * @param option.attribute - Custom HTML attributes list.
 * @param option.label - label text.
 *
 * @example
 * ```ts
 * const label = new UILabel({ label : "hello_world" });
 * ```
 * @public
 */
export class UILabel {

    private element: HTMLSpanElement;

    constructor(option: IUILabel) {
        this.element = document.createElement("span");

        if (option.id) this.element.id = option.id;
        
        if (option.className) this.element.className = option.className;

        if (option.classList && option.classList.length > 0) {
            this.element.classList.add(...option.classList);
        };

        if(option.label) this.element.textContent = option.label;

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
    public label = ( label : string ) : void => void (this.element.textContent = label);

    public append = (element: UIElement | UIBlend): UIAppend => new UIAppend(this.element, element,"END");
    public prepend = (element: UIElement | UIBlend): UIAppend => new UIAppend(this.element, element,"START");

    public remove = (): void => this.element.remove();
    public clear = (): string => (this.element.innerHTML = "");
    public get = (): HTMLElement => this.element;
};