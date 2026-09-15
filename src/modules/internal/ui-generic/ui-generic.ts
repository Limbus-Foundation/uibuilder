// UI GENERIC : 

import { UIRender, UIRenderOrganization } from "../ui-render/ui-render.js";
import { UIBlend } from "../../method/ui-blend/ui-blend.js";
import { UIElement } from "../ui-element/ui-element.js";
import { UIStyle, UIStyleProperties } from "../../method/ui-style/ui-style.js";

interface IGenericData {
    id : string;
    className : string;
    attribute : Record<string,string>[];
    content  : string ;
};

export class UIGeneric {

    private htmlElement: HTMLElement;

    private renderedPlace : HTMLElement | null = null;
    private genericData : IGenericData = {
        id : "",
        className : "",
        attribute : [],
        content : ""
    };

    protected isRendered: boolean = false;

    private renderCallbacks: (() => void)[] = [];
    private unrenderCallbacks: (() => void)[] = [];

    constructor(element: HTMLElement) {

        this.htmlElement = element;

    };

    public __setRenderedPlace = ( place : HTMLElement | null ) : HTMLElement | null => this.renderedPlace = place;
    public __getRenderedPlace = () : HTMLElement | null => this.renderedPlace;

    private __parseClassName = (classNameList: string): void => {
        this.htmlElement.classList.add(...classNameList.trim().split(/\s+/));
    };



    public id = (id: string): void => {
        this.htmlElement.id = id;
        this.genericData.id = id;
    };

    public className = (className: string): void => {
        this.__parseClassName(className);
        this.genericData.className = this.htmlElement.classList.value;
    };

    /**
     * @deprecated Use `className("classOne classTwo")` instead.
     */
    public classList = (classList: string[]): void => {
        this.htmlElement.classList.add(...classList);
    };

    /**
     * @internal Use `className("classOne classTwo")` instead.
     */
    public __getIsRendered = (): boolean => this.isRendered;

    public attribute = (name: string, value: string): void => {
        this.htmlElement.setAttribute(name, String(value));
        this.genericData.attribute.push({ name , value });
    };

    public removeAttribute = (attribute: string): void => {
        this.htmlElement.removeAttribute(attribute);
        const index = this.genericData.attribute.findIndex(item => item.name === attribute);
        if (index !== -1) this.genericData.attribute.splice(index, 1);
    };

    public removeClassName = (className: string): void => {
        this.htmlElement.classList.remove(className);
        this.genericData.className = this.htmlElement.classList.value;
    };

    /**
     * @deprecated Use `content("Hello World")` instead.
     */
    public label = (label: string): void => {
        this.htmlElement.textContent = label;
    };

    public content = (content : string): void => {
        this.htmlElement.textContent = content;
        this.genericData.content = content;
    };

    public replaceRender = (newUIElement: UIElement, oldUIElement: UIElement): void => {
        this.htmlElement.replaceChild(newUIElement.__get(), oldUIElement.__get());
    };

    public render = (element: UIElement | UIBlend, organization: UIRenderOrganization = "below"): void => {
        new UIRender(this.htmlElement, element, organization);
    };

    public replaceSelfRender = (element: UIElement): void => {
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
    public __invokeListenUnrender = () : void => {
        
        if (this.isRendered) {
            this.isRendered = false;
            for (const callback of this.unrenderCallbacks) callback();
        };
    };

    // public switchRender = ()

    /**
     * #### __invokeListenRender();
     * 
     * internal ( soft-private ) function to invoke listen render
     * 
     * @see {@link UIGeneric.__get}
     *
     * @internal
     */
    public __invokeListenRender = () : void => {
        if (!this.isRendered) {
            this.isRendered = true;
            for (const callback of this.renderCallbacks) callback();
        };
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
    public __getGenericData = () : IGenericData => this.genericData;

    public unrender = (element: UIElement | UIBlend): void => {

        if (element instanceof UIBlend) {
            for (const el of element) {
                if (el.__getIsRendered() === false) {
                    console.warn("UIBuilder > Element " + el.__get().tagName.toLowerCase() + " cannot be unrendered because it is not rendered!");
                    return;
                };

                this.htmlElement.removeChild(el.__get());
                el.__setRenderedPlace(null)
                el.__invokeListenUnrender();
            };

            return;
        }; 

        if (element.__getIsRendered() === false) {
            console.warn("UIBuilder > Element " + element.__get().tagName.toLowerCase() + " cannot be unrendered because it is not rendered!");
            return;
        };

        this.htmlElement.removeChild(element.__get());
        element.__setRenderedPlace(null);
        element.__invokeListenUnrender();
    }; 

    public listenRender = (callback: () => void): void => {
        this.renderCallbacks.push(callback);
    };

    public listenUnrender = (callback: () => void): void => {
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
    public __get = (): HTMLElement => this.htmlElement;

    public style = (style: UIStyle | UIStyleProperties) : CSSStyleDeclaration & UIStyleProperties => Object.assign(this.htmlElement.style, style instanceof UIStyle ? style.properties : style);

};