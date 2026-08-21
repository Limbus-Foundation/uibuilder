export interface IUIImage {
    id?: string;
    classList?: string[];
    className?: string;
    attribute?: {
        name: string;
        value: string;
    }[];
    src?: string;
}
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
export declare class UIImage {
    private element;
    constructor(option: IUIImage);
    id: (id: string) => void;
    className: (className: string) => void;
    classList: (classList: string[]) => void;
    attribute: (name: string, value: string) => void;
    removeAttribute: (attribute: string) => void;
    removeClassName: (className: string) => void;
    src: (src: string) => void;
    remove: () => void;
    clear: () => string;
    get: () => HTMLElement;
}
