// UI GENERIC : 

import { UIAppend, UIAppendOrganization } from "../ui-append/ui-append.js";
import { UIBlend } from "../ui-blend/ui-blend.js";
import { UIElement } from "../ui-element/ui-element.js";
import { UIStyle, UIStyleProperties } from "../ui-style/ui-style.js";

export class UIGeneric {

    private htmlElement: HTMLElement;

    protected rendered: boolean;

    private renderCallbacks: (() => void)[] = [];
    private unrenderCallbacks: (() => void)[] = [];

    constructor(element: HTMLElement) {
        this.htmlElement = element;
        this.rendered = false;
    };

    public id = (id: string): void => void (this.htmlElement.id = id);
    public className = (className: string): void => void (this.htmlElement.className = className);
    public classList = (classList: string[]): void => this.htmlElement.classList.add(...classList);
    public attribute = (name: string, value: string): void => this.htmlElement.setAttribute(name, String(value));
    public removeAttribute = (attribute: string): void => void (this.htmlElement.removeAttribute(attribute));
    public removeClassName = (className: string): void => void (this.htmlElement.classList.remove(className));
    public label = (label: string): void => void (this.htmlElement.textContent = label);

    public replaceRender = (newUIElement: UIElement, oldUIElement: UIElement): void => {
        this.htmlElement.replaceChild(newUIElement.__get(), oldUIElement.__get());
    };

    public render = (element: UIElement | UIBlend, organization: UIAppendOrganization = "below"): void => {

        new UIAppend(this.htmlElement, element, organization);


    };

    public __invokeUnrenderListen = () : void => {
        
        if (this.rendered) {
            this.rendered = false;
            for (const callback of this.unrenderCallbacks) callback();
        };
    };

    public __invokeRenderListen = () : void => {
        if (!this.rendered) {
            this.rendered = true;
            for (const callback of this.renderCallbacks) callback();
        };
    };

    public unrender = (element: UIElement | UIBlend): void => {

        if (element instanceof UIBlend) {

            for (const el of element) {
                this.htmlElement.removeChild(el.__get());
                el.__invokeUnrenderListen();
            };

            return; 
        };

        this.htmlElement.removeChild(element.__get());
        element.__invokeUnrenderListen();
    };

    public renderListen = (callback: () => void): void => {
        this.renderCallbacks.push(callback);
    };

    public unrenderListen = (callback: () => void): void => {
        this.unrenderCallbacks.push(callback);
    };

    public remove = (): void => this.htmlElement.remove();
    public clear = (): string => (this.htmlElement.innerHTML = "");
    public __get = (): HTMLElement => this.htmlElement;

    public style = (style: UIStyle | UIStyleProperties): CSSStyleDeclaration & UIStyleProperties =>
        Object.assign(this.htmlElement.style, style instanceof UIStyle ? style.properties : style);

};