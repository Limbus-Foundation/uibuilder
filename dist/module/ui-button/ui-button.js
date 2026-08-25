// UI BUTTON : 
import { UIAppend } from "../ui-append/ui-append.js";
;
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
    element;
    constructor(option) {
        this.element = document.createElement("button");
        if (option.id)
            this.element.id = option.id;
        if (option.className)
            this.element.className = option.className;
        if (option.classList && option.classList.length > 0) {
            this.element.classList.add(...option.classList);
        }
        ;
        if (option.text)
            this.element.textContent = option.text;
        if (option.label)
            this.element.textContent = option.label;
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
    text = (text) => void (this.element.textContent = text);
    label = (label) => void (this.element.textContent = label);
    append = (element) => new UIAppend(this.element, element, "END");
    prepend = (element) => new UIAppend(this.element, element, "START");
    remove = () => this.element.remove();
    clear = () => (this.element.innerHTML = "");
    get = () => this.element;
}
;
//# sourceMappingURL=ui-button.js.map