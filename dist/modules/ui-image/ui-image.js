// UI IMAGE : 
import { UIGeneric } from "../ui-generic/ui-generic.js";
;
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
export class UIImage extends UIGeneric {
    element;
    constructor(option) {
        const element = document.createElement("img");
        super(element);
        this.element = element;
        if (option.id)
            this.element.id = option.id;
        if (option.className)
            this.element.className = option.className;
        if (option.classList?.length) {
            this.element.classList.add(...option.classList);
        }
        if (option.src)
            this.element.src = option.src;
        if (option.attribute) {
            Object.entries(option.attribute).forEach(([name, value]) => {
                this.element.setAttribute(name, String(value));
            });
        }
    }
    src = (src) => void (this.element.src = src);
}
//# sourceMappingURL=ui-image.js.map