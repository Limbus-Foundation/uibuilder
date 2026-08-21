// UI TEXT FIELD : 
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
    element;
    constructor(option) {
        this.element = document.createElement("input");
        this.element.type = option?.type || "text";
        if (option?.id)
            this.element.id = option.id;
        if (option?.placeholder)
            this.element.placeholder = option.placeholder;
        if (option?.value)
            this.element.value = option.value;
        if (option?.className)
            this.element.className = option.className;
        if (option?.classList && option.classList.length > 0) {
            this.element.classList.add(...option.classList);
        }
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
    value = (val) => {
        if (val !== undefined)
            this.element.value = val;
        return this.element.value;
    };
    placeholder = (ph) => void (this.element.placeholder = ph);
    disable = (state) => void (this.element.disabled = state);
    clear = () => void (this.element.value = "");
    get = () => this.element;
}
//# sourceMappingURL=ui-text-field.js.map