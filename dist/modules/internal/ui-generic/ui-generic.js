// UI GENERIC : 
import { UIRender } from "../ui-render/ui-render.js";
import { UIBlend } from "../../method/ui-blend/ui-blend.js";
import { UIStyle } from "../../method/ui-style/ui-style.js";
;
export class UIGeneric {
    htmlElement;
    renderedPlace = null;
    genericData = {
        id: "",
        className: "",
        attribute: [],
        content: ""
    };
    isRendered = false;
    renderCallbacks = [];
    unrenderCallbacks = [];
    constructor(element) {
        this.htmlElement = element;
    }
    ;
    __setRenderedPlace = (place) => this.renderedPlace = place;
    __getRenderedPlace = () => this.renderedPlace;
    __parseClassName = (classNameList) => {
        this.htmlElement.classList.add(...classNameList.trim().split(/\s+/));
    };
    id = (id) => {
        this.htmlElement.id = id;
        this.genericData.id = id;
    };
    className = (className) => {
        this.__parseClassName(className);
        this.genericData.className = this.htmlElement.classList.value;
    };
    /**
     * @deprecated Use `className("classOne classTwo")` instead.
     */
    classList = (classList) => {
        this.htmlElement.classList.add(...classList);
    };
    /**
     * @internal Use `className("classOne classTwo")` instead.
     */
    __getIsRendered = () => this.isRendered;
    attribute = (name, value) => {
        this.htmlElement.setAttribute(name, String(value));
        this.genericData.attribute.push({ name, value });
    };
    removeAttribute = (attribute) => {
        this.htmlElement.removeAttribute(attribute);
        const index = this.genericData.attribute.findIndex(item => item.name === attribute);
        if (index !== -1)
            this.genericData.attribute.splice(index, 1);
    };
    removeClassName = (className) => {
        this.htmlElement.classList.remove(className);
        this.genericData.className = this.htmlElement.classList.value;
    };
    /**
     * @deprecated Use `content("Hello World")` instead.
     */
    label = (label) => {
        this.htmlElement.textContent = label;
    };
    content = (content) => {
        this.htmlElement.textContent = content;
        this.genericData.content = content;
    };
    replaceRender = (newUIElement, oldUIElement) => {
        this.htmlElement.replaceChild(newUIElement.__get(), oldUIElement.__get());
    };
    render = (element, organization = "below") => {
        new UIRender(this.htmlElement, element, organization);
        // if(element instanceof UIBlend){
        //     for ( const el in element){
        //         el.__set
        //     }
        // }
    };
    replaceSelfRender = (element) => {
        this.htmlElement.replaceWith(element.__get());
    };
    /**
    * #### __invokeListenRender();
    *
    * internal ( soft-private ) function to invoke listen unrender
    *
    * @see {@link UIGeneric.__get}
    *
    * @internal
    */
    __invokeListenUnrender = () => {
        if (this.isRendered) {
            this.isRendered = false;
            for (const callback of this.unrenderCallbacks)
                callback();
        }
        ;
    };
    /**
     * #### __invokeListenRender();
     *
     * internal ( soft-private ) function to invoke listen render
     *
     * @see {@link UIGeneric.__get}
     *
     * @internal
     */
    __invokeListenRender = () => {
        if (!this.isRendered) {
            this.isRendered = true;
            for (const callback of this.renderCallbacks)
                callback();
        }
        ;
    };
    /**
   * #### __getGenericData();
   *
   * internal ( soft-private ) function to get element generic data
   *
   * @see {@link UIGeneric.__getGenericData}
   *
   * @internal
   */
    __getGenericData = () => this.genericData;
    unrender = (element) => {
        if (element instanceof UIBlend) {
            for (const el of element) {
                if (el.__getIsRendered() === false) {
                    console.warn("UIBuilder > Element " + el.__get().tagName.toLowerCase() + " cannot be unrendered because it is not rendered!");
                    return;
                }
                ;
                this.htmlElement.removeChild(el.__get());
                el.__invokeListenUnrender();
            }
            ;
            return;
        }
        ;
        if (element.__getIsRendered() === false) {
            console.warn("UIBuilder > Element " + element.__get().tagName.toLowerCase() + " cannot be unrendered because it is not rendered!");
            return;
        }
        ;
        this.htmlElement.removeChild(element.__get());
        element.__invokeListenUnrender();
    };
    listenRender = (callback) => {
        this.renderCallbacks.push(callback);
    };
    listenUnrender = (callback) => {
        this.unrenderCallbacks.push(callback);
    };
    /**
     * #### __get();
     *
     * internal ( soft-private ) function to get the real instance of an element.
     *
     * @see {@link UIGeneric.__get}
     *
     * @internal
     */
    __get = () => this.htmlElement;
    style = (style) => Object.assign(this.htmlElement.style, style instanceof UIStyle ? style.properties : style);
}
;
//# sourceMappingURL=ui-generic.js.map