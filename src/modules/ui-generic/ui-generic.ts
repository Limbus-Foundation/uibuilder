
// UI GENERIC : 

import { UIAppend, UIAppendOrganization } from "../ui-append/ui-append.js";
import { UIBlend } from "../ui-blend/ui-blend.js";
import { UIElement } from "../ui-element/ui-element.js";
import { UIStyle, UIStyleProperties } from "../ui-style/ui-style.js";

export class UIGeneric {

    private htmlElement : HTMLElement;

    constructor( element : HTMLElement ){
        this.htmlElement = element;
    }; 

    public id = (id: string): void => void (this.htmlElement.id = id);
    public className = (className: string): void => void (this.htmlElement.className = className);
    public classList = (classList: string[]): void => this.htmlElement.classList.add(...classList);
    public attribute = (name: string, value: string): void => this.htmlElement.setAttribute(name, String(value));
    public removeAttribute = ( attribute : string ) : void => void (this.htmlElement.removeAttribute(attribute));
    public removeClassName = ( className : string ) : void => void ( this.htmlElement.classList.remove(className));
    public label = ( label : string ) : void => void (this.htmlElement.textContent = label);

    public render = (element: UIElement | UIBlend, organization: UIAppendOrganization = "below"): UIAppend => new UIAppend(this.htmlElement, element, organization);

    public unrender = (element: UIElement | UIBlend): void => {

        if (element instanceof UIBlend) {
            for (const el of element) this.htmlElement.removeChild(el.get());
            return;
        }

        this.htmlElement.removeChild(element.get());
    };

    public remove = (): void => this.htmlElement.remove();
    public clear = (): string => (this.htmlElement.innerHTML = "");
    public get = (): HTMLElement => this.htmlElement;
    public style = (style: UIStyle | UIStyleProperties): CSSStyleDeclaration & UIStyleProperties => Object.assign(this.htmlElement.style,style instanceof UIStyle ? style.properties : style);


};
