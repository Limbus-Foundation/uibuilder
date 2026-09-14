import { UIRenderOrganization } from "../ui-render/ui-render.js";
import { UIBlend } from "../../method/ui-blend/ui-blend.js";
import { UIElement } from "../ui-element/ui-element.js";
import { UIStyle, UIStyleProperties } from "../../method/ui-style/ui-style.js";
export declare class UIGeneric {
    private htmlElement;
    private renderedPlace;
    private genericData;
    protected isRendered: boolean;
    private renderCallbacks;
    private unrenderCallbacks;
    constructor(element: HTMLElement);
    __setRenderedPlace: (place: HTMLElement | null) => HTMLElement | null;
    __getRenderedPlace: () => HTMLElement | null;
    private __parseClassName;
    id: (id: string) => void;
    className: (className: string) => void;
    /**
     * @deprecated Use `className("classOne classTwo")` instead.
     */
    classList: (classList: string[]) => void;
    attribute: (name: string, value: string) => void;
    removeAttribute: (attribute: string) => void;
    removeClassName: (className: string) => void;
    /**
     * @deprecated Use `content("Hello World")` instead.
     */
    label: (label: string) => void;
    content: (content: string) => void;
    replaceRender: (newUIElement: UIElement, oldUIElement: UIElement) => void;
    render: (element: UIElement | UIBlend, organization?: UIRenderOrganization) => void;
    replaceSelfRender: (element: UIElement) => void;
    unrender: (element: UIElement | UIBlend) => void;
    listenRender: (callback: () => void) => void;
    listenUnrender: (callback: () => void) => void;
    style: (style: UIStyle | UIStyleProperties) => CSSStyleDeclaration & UIStyleProperties;
}
