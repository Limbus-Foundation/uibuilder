// UI ICON BUTTON : 
import { UIGeneric } from "../ui-generic/ui-generic.js";
;
/**
 *
 * #### UIBuilder.UIIconButton
 *
 * Wrapper class for creating and managing an `HtmlButtonElement && HtmlElement -> <i>`.
 *
 * @param option - Configuration object to initialize the input element.
 * @param option.id - Unique ID for the HTML element.
 * @param option.className - Single class name string.
 * @param option.classList - List of CSS class names.
 * @param option.attribute - Custom HTML attributes list.
 * @param option.iconClassName - Button icon class string.
 *
 * @example
 * ```ts
 * const buttonIcon = new UIIconButton({ className : "icon_class_name" });
 * ```
 * @public
 */
export class UIIconButton extends UIGeneric {
    element;
    constructor(option) {
        const element = document.createElement("button");
        super(element);
        this.element = element;
        if (option.id)
            this.element.id = option.id;
        if (option.classList?.length) {
            this.element.classList.add(...option.classList);
        }
        if (option.iconClassName) {
            this.setIcon(option.iconClassName, option.label || "");
        }
        if (option.className)
            this.element.className = option.className;
        if (option.attribute) {
            Object.entries(option.attribute).forEach(([name, value]) => {
                this.element.setAttribute(name, String(value));
            });
        }
    }
    setIcon = (iconClassName, label) => void (this.element.innerHTML = `<i class="${iconClassName}"></i> ${label}`);
    icon = (iconClassName, label) => void (this.setIcon(iconClassName, label || ""));
}
//# sourceMappingURL=ui-icon-button.js.map