// UI GENERIC : 
import { UIAppend } from "../ui-append/ui-append.js";
import { UIBlend } from "../ui-blend/ui-blend.js";
import { UIStyle } from "../ui-style/ui-style.js";
export class UIGeneric {
    htmlElement;
    rendered;
    renderCallbacks = [];
    unrenderCallbacks = [];
    constructor(element) {
        this.htmlElement = element;
        this.rendered = false;
    }
    ;
    id = (id) => void (this.htmlElement.id = id);
    className = (className) => void (this.htmlElement.className = className);
    classList = (classList) => this.htmlElement.classList.add(...classList);
    attribute = (name, value) => this.htmlElement.setAttribute(name, String(value));
    removeAttribute = (attribute) => void (this.htmlElement.removeAttribute(attribute));
    removeClassName = (className) => void (this.htmlElement.classList.remove(className));
    label = (label) => void (this.htmlElement.textContent = label);
    replaceRender = (oldUIElement, newUIElement) => {
        this.htmlElement.replaceChild(newUIElement.__get(), oldUIElement.__get());
    };
    render = (element, organization = "below") => {
        new UIAppend(this.htmlElement, element, organization);
    };
    __invokeUnrenderListen = () => {
        if (this.rendered) {
            this.rendered = false;
            for (const callback of this.unrenderCallbacks)
                callback();
        }
        ;
    };
    __invokeRenderListen = () => {
        if (!this.rendered) {
            this.rendered = true;
            for (const callback of this.renderCallbacks)
                callback();
        }
        ;
    };
    unrender = (element) => {
        if (element instanceof UIBlend) {
            for (const el of element) {
                this.htmlElement.removeChild(el.__get());
                el.__invokeUnrenderListen();
            }
            ;
            return;
        }
        ;
        this.htmlElement.removeChild(element.__get());
        element.__invokeUnrenderListen();
    };
    renderListen = (callback) => {
        this.renderCallbacks.push(callback);
    };
    unrenderListen = (callback) => {
        this.unrenderCallbacks.push(callback);
    };
    remove = () => this.htmlElement.remove();
    clear = () => (this.htmlElement.innerHTML = "");
    __get = () => this.htmlElement;
    style = (style) => Object.assign(this.htmlElement.style, style instanceof UIStyle ? style.properties : style);
}
;
//# sourceMappingURL=ui-generic.js.map