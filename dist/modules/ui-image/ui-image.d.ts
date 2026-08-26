import { UIGeneric } from "../ui-generic/ui-generic.js";
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
export declare class UIImage extends UIGeneric {
    private element;
    constructor(option: IUIImage);
    src: (src: string) => void;
}
