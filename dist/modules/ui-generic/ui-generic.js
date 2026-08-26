// UI GENERIC : 
import { UIAppend } from "../ui-append/ui-append.js";
import { UIBlend } from "../ui-blend/ui-blend.js";
import { UIStyle } from "../ui-style/ui-style.js";
export class UIGeneric {
    htmlElement;
    constructor(element) {
        this.htmlElement = element;
    }
    ;
    id = (id) => void (this.htmlElement.id = id);
    className = (className) => void (this.htmlElement.className = className);
    classList = (classList) => this.htmlElement.classList.add(...classList);
    attribute = (name, value) => this.htmlElement.setAttribute(name, String(value));
    removeAttribute = (attribute) => void (this.htmlElement.removeAttribute(attribute));
    removeClassName = (className) => void (this.htmlElement.classList.remove(className));
    label = (label) => void (this.htmlElement.textContent = label);
    render = (element, organization = "below") => new UIAppend(this.htmlElement, element, organization);
    unrender = (element) => {
        if (element instanceof UIBlend) {
            for (const el of element)
                this.htmlElement.removeChild(el.get());
            return;
        }
        this.htmlElement.removeChild(element.get());
    };
    remove = () => this.htmlElement.remove();
    clear = () => (this.htmlElement.innerHTML = "");
    get = () => this.htmlElement;
    style = (style) => Object.assign(this.htmlElement.style, style instanceof UIStyle ? style.properties : style);
}
;
//# sourceMappingURL=ui-generic.js.map