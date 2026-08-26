// UI SLIDER : 
import { UIGeneric } from "../ui-generic/ui-generic.js";
/**
 *
 * #### UIBuilder.UISlider
 *
 * Wrapper class for creating and managing an `HTMLInputElement`.
 *
 * @param option - Configuration object to initialize the input element.
 * @param option.id - Unique ID for the HTML element.
 * @param option.value - Default input value.
 * @param option.className - Single class name string.
 * @param option.classList - List of CSS class names.
 * @param option.attribute - Custom HTML attributes list.
 *
 * @example
 * ```ts
 * const slide = new UISlider({ value: "id_string", className: "class_string" });
 * ```
 */
export class UISlider extends UIGeneric {
    element;
    constructor(option) {
        const element = document.createElement("input");
        super(element);
        this.element = element;
        this.element.type = "range";
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
            Object.entries(option.attribute).forEach(([name, value]) => {
                this.element.setAttribute(name, String(value));
            });
        }
    }
    value = (val) => {
        if (val !== undefined)
            this.element.value = val;
        return this.element.value;
    };
    disable = (state) => void (this.element.disabled = state);
}
//# sourceMappingURL=ui-slider.js.map