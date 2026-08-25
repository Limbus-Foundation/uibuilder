// UI ICON BUTTON : 
import { UIAppend } from "../ui-append/ui-append.js";
;
/**
 *
 * #### UIBuilder.UIIconButton
 *
 * Wrapper class for creating and managing an `HtmlButtonElment && HtmlElement -> <i>`.
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
export class UIIconButton {
    element;
    constructor(option) {
        this.element = document.createElement("button");
        if (option.id)
            this.element.id = option.id;
        if (option.classList && option.classList.length > 0) {
            this.element.classList.add(...option.classList);
        }
        ;
        if (option.iconClassName)
            this.setIcon(option.iconClassName, option.label || "");
        if (option.className)
            this.element.className = option.className;
        if (option?.attribute) {
            Object.entries(option.attribute).forEach(([name, value]) => {
                this.element.setAttribute(name, String(value));
            });
        }
    }
    ;
    setIcon = (iconClassName, label) => void (this.element.innerHTML = `<i class="${iconClassName}"></i> ${label}`);
    id = (id) => void (this.element.id = id);
    className = (className) => void (this.element.className = className);
    icon = (iconClassName, label) => void (this.setIcon(iconClassName, label || ""));
    classList = (classList) => this.element.classList.add(...classList);
    attribute = (name, value) => this.element.setAttribute(name, value);
    removeAttribute = (attribute) => void (this.element.removeAttribute(attribute));
    removeClassName = (className) => void (this.element.classList.remove(className));
    append = (element) => new UIAppend(this.element, element, "END");
    prepend = (element) => new UIAppend(this.element, element, "START");
    remove = () => this.element.remove();
    get = () => this.element;
}
;
//# sourceMappingURL=ui-icon-button.js.map