
// UI IMAGE : 

export interface IUIImage {
    id?: string;
    classList?: string[];
    className?: string;
    attribute?: { name: string; value: string }[];
    src ? : string;
};

/**
 * 
 * #### UIBuilder.UIImage
 *  
 * Wrapper class for creating and managing an `HtmlImageElement`.
 *
 * @param option - Configuration object to initialize the input element.
 * @param option.id - Unique ID for the HTML element.
 * @param option.className - Single class name string.
 * @param option.classList - List of CSS class names.
 * @param option.attribute - Custom HTML attributes list.
 * @param option.src - Image path.
 *
 * @example
 * ```ts
 * const image = new UIImage({ src : "../../img.png" });
 * ```
 * @public
 */
export class UIImage {

    private element: HTMLImageElement;

    constructor(option: IUIImage) {

        this.element = document.createElement("img");

        if (option.id) this.element.id = option.id;
        
        if (option.className) this.element.className = option.className;

        if (option.classList && option.classList.length > 0) {
            this.element.classList.add(...option.classList);
        };

        if(option.src) this.element.src = option.src;

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
    public src = ( src : string ) : void => void ( this.element.src = src);

    public remove = (): void => this.element.remove();
    public clear = (): string => (this.element.innerHTML = "");
    public get = (): HTMLElement => this.element;
};