// UI PANEL : 
;
/**
 *
 * #### UIBuilder.UIGroup
 *
 * Wrapper class for creating and managing an `HTMLDivElement `.
 *
 * @param option - Configuration object to initialize the input element.
 * @param option.id - Unique ID for the HTML element.
 * @param option.className - Single class name string.
 * @param option.classList - List of CSS class names.
 * @param option.attribute - Custom HTML attributes list.
 *
 * @example
 * ```ts
 * const group = new UIGroup({ className : "class_name" });
 * ```
 * @public
 */
export class UIGroup {
    element;
    constructor(option) {
        this.element = document.createElement("div");
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
    append = (element) => this.element.append(element.get());
    remove = () => this.element.remove();
    clear = () => (this.element.innerHTML = "");
    get = () => this.element;
}
;
//# sourceMappingURL=ui-group.js.map