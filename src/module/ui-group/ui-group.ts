
// UI PANEL : 

import { UIAppend } from "../ui-append/ui-append.js";
import { UIBlend } from "../ui-blend/ui-blend.js";
import { UIElement } from "../ui-element/ui-element.js";

export interface IUIGroup {
    id?: string;
    classList?: string[];
    className?: string;
    attribute?: { name: string; value: string }[];
};

/**
 * 
 * #### UIBuilder.UIGroup
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
 * const group = new UIGroup({ className : "class_name" });
 * ```
 * @public
 */
export class UIGroup {

    private element: HTMLDivElement;

    constructor(option: IUIGroup) {
        this.element = document.createElement("div");

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


    public append = (element: UIElement | UIBlend): UIAppend => new UIAppend(this.element, element,"END");
    public prepend = (element: UIElement | UIBlend): UIAppend => new UIAppend(this.element, element,"START");

    public remove = (): void => this.element.remove();
    public clear = (): string => (this.element.innerHTML = "");
    public get = (): HTMLElement => this.element;
};