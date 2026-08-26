// UI BUTTON : 
import { UIGeneric } from "../ui-generic/ui-generic.js";
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
 * @param option.label - Button label
 *
 * @example
 * ```ts
 * const btn = new UIButton({ text : "label" });
 * ```
 * @public
 */
export class UIButton extends UIGeneric {
    element;
    constructor(option) {
        const element = document.createElement("button");
        super(element);
        this.element = element;
        if (option.id)
            this.element.id = option.id;
        if (option.className)
            this.element.className = option.className;
        if (option.classList?.length) {
            this.element.classList.add(...option.classList);
        }
        if (option.label)
            this.element.textContent = option.label;
        if (option.attribute) {
            Object.entries(option.attribute).forEach(([name, value]) => {
                this.element.setAttribute(name, String(value));
            });
        }
    }
}
//# sourceMappingURL=ui-button.js.map