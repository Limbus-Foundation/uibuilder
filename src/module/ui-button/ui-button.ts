
// UI BUTTON : 

import { UIElement } from "../ui-element/ui-element.js";

export interface IUIButton {
    id?: string;
    classList?: string[];
    className?: string;
    attribute?: { name: string; value: string }[];
    text? : string;
    label? : string;
};

/**
 * 
 * #### UIBuilder.UIButton
 * 
 * Wrapper class for creating and managing an `HtmlButtonElement `.
 *
 * @param option - Configuration object to initialize the input element.
 * @param option.id - Unique ID for the HTML element.
 * @param option.className - Single class name string.
 * @param option.classList - List of CSS class names.
 * @param option.attribute - Custom HTML attributes list.
 * @param option.text - Button label
 * @param option.label - Button label
 *
 * @example
 * ```ts
 * const btn = new UIButton({ text : "label" });
 * ```
 * @public
 */
export class UIButton {

    private element: HTMLButtonElement;

    constructor(option: IUIButton) {

        this.element = document.createElement("button");

        if (option.id) this.element.id = option.id;
        
        if (option.className) this.element.className = option.className;

        if (option.classList && option.classList.length > 0) {
            this.element.classList.add(...option.classList);
        };

        if(option.text) this.element.textContent = option.text;
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
    public text = ( text : string ) : void => void (this.element.textContent = text);
    public label = ( label : string ) : void => void (this.element.textContent = label);

    public append = (element: UIElement): void => this.element.append(element.get());
    public remove = (): void => this.element.remove();
    public clear = (): string => (this.element.innerHTML = "");
    public get = (): HTMLElement => this.element;
};