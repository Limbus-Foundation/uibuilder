import { UIAppendOrganization } from "../ui-append/ui-append.js";
import { UIBlend } from "../ui-blend/ui-blend.js";
import { UIElement } from "../ui-element/ui-element.js";
import { UIStyle, UIStyleProperties } from "../ui-style/ui-style.js";
export declare class UIGeneric {
    private htmlElement;
    protected rendered: boolean;
    private renderCallbacks;
    private unrenderCallbacks;
    constructor(element: HTMLElement);
    id: (id: string) => void;
    className: (className: string) => void;
    classList: (classList: string[]) => void;
    attribute: (name: string, value: string) => void;
    removeAttribute: (attribute: string) => void;
    removeClassName: (className: string) => void;
    label: (label: string) => void;
    replaceRender: (newUIElement: UIElement, oldUIElement: UIElement) => void;
    render: (element: UIElement | UIBlend, organization?: UIAppendOrganization) => void;
    __invokeUnrenderListen: () => void;
    __invokeRenderListen: () => void;
    unrender: (element: UIElement | UIBlend) => void;
    renderListen: (callback: () => void) => void;
    unrenderListen: (callback: () => void) => void;
    remove: () => void;
    clear: () => string;
    __get: () => HTMLElement;
    style: (style: UIStyle | UIStyleProperties) => CSSStyleDeclaration & UIStyleProperties;
}
