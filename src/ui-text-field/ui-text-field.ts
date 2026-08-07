
// UI TEXT FIELD : 

export interface IUITextField {
    id?: string;
    placeholder?: string;
    value?: string;
    type?: "text" | "password" | "number";
    classList?: string[];
    className?: string;
    attribute?: { name: string; value: string }[];
}

/**
 * 
 * #### UIBuilder.UITextField
 * 
 * Wrapper class for creating and managing an `HTMLInputElement`.
 *
 * @param option - Configuration object to initialize the input element.
 * @param option.id - Unique ID for the HTML element.
 * @param option.placeholder - Placeholder text.
 * @param option.value - Default input value.
 * @param option.type - Input type (`text`, `password`, or `number`).
 * @param option.className - Single class name string.
 * @param option.classList - List of CSS class names.
 * @param option.attribute - Custom HTML attributes list.
 *
 * @example
 * ```ts
 * const password = new UITextField({ value: "1234", type: "password", id: "myId" });
 * ```
 */
export class UITextField {

    private element: HTMLInputElement;

    constructor(option?: IUITextField) {

        this.element = document.createElement("input");
        this.element.type = option?.type || "text";

        if (option?.id) this.element.id = option.id;
        if (option?.placeholder) this.element.placeholder = option.placeholder;
        if (option?.value) this.element.value = option.value;
        if (option?.className) this.element.className = option.className;

        if (option?.classList && option.classList.length > 0) {
            this.element.classList.add(...option.classList);
        }

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

    public value = (val?: string): string => {
        if (val !== undefined) this.element.value = val;
        return this.element.value;
    };

    public placeholder = (ph: string): void => void (this.element.placeholder = ph);

    public disable = (state: boolean): void => void (this.element.disabled = state);

    public clear = (): void => void (this.element.value = "");

    public get = (): HTMLInputElement => this.element;
}