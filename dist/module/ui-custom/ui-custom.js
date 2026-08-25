// UI CUSTOM : 
import { UIAppend } from "../ui-append/ui-append.js";
;
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
    element;
    constructor(option) {
        this.element = document.createElement(option.tag);
        if (option.id)
            this.element.id = option.id;
        if (option.className)
            this.element.className = option.className;
        if (option.classList && option.classList.length > 0) {
            this.element.classList.add(...option.classList);
        }
        ;
        if (option?.attribute) {
            Object.entries(option.attribute).forEach(([name, value]) => {
                this.element.setAttribute(name, String(value));
            });
        }
    }
    ;
    id = (id) => void (this.element.id = id);
    className = (className) => void (this.element.className = className);
    classList = (classList) => this.element.classList.add(...classList);
    attribute = (name, value) => this.element.setAttribute(name, value);
    removeAttribute = (attribute) => void (this.element.removeAttribute(attribute));
    removeClassName = (className) => void (this.element.classList.remove(className));
    append = (element) => new UIAppend(this.element, element, "END");
    prepend = (element) => new UIAppend(this.element, element, "START");
    remove = () => this.element.remove();
    clear = () => (this.element.innerHTML = "");
    get = () => this.element;
}
;
//# sourceMappingURL=ui-custom.js.map