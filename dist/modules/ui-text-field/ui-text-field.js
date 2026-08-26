// UI TEXT FIELD :
import { UIGeneric } from "../ui-generic/ui-generic.js";
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
export class UITextField extends UIGeneric {
    element;
    constructor(option) {
        const element = document.createElement("input");
        super(element);
        this.element = element;
        this.element.type = option?.type || "text";
        if (option?.id)
            this.element.id = option.id;
        if (option?.placeholder)
            this.element.placeholder = option.placeholder;
        if (option?.value)
            this.element.value = option.value;
        if (option?.className)
            this.element.className = option.className;
        if (option?.classList?.length) {
            this.element.classList.add(...option.classList);
        }
        if (option?.attribute) {
            option.attribute.forEach(({ name, value }) => {
                this.element.setAttribute(name, value);
            });
        }
    }
    value = (val) => {
        if (val !== undefined)
            this.element.value = val;
        return this.element.value;
    };
    placeholder = (ph) => void (this.element.placeholder = ph);
    disable = (state) => void (this.element.disabled = state);
}
//# sourceMappingURL=ui-text-field.js.map