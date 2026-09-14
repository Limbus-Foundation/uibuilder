import { UIRenderOrganization } from "../../internal/ui-render/ui-render.js";
import { UIBlend } from "../../method/ui-blend/ui-blend.js";
import { UIElement } from "../../internal/ui-element/ui-element.js";
import { UIStyle, UIStyleProperties } from "../../method/ui-style/ui-style.js";
export type EventCallback<K extends keyof HTMLElementEventMap> = (e: HTMLElementEventMap[K]) => void;
/**
 *
 * ### UIBody
 *
 * Return a reference to the `<body>` via `UIBody`.
 *
 * @returns `UIBody`.
 *
 * @see {@link UIBody}
 * @see {@link UIBody.append}
 * @see {@link UIBody.prepend}
 * @see {@link UIBody.style}
 * @public
 * @static
 */
export declare class UIBody {
    static render: (element: UIElement | UIBlend, organization?: UIRenderOrganization) => void;
    static unrender: (element: UIElement | UIBlend) => void;
    static replaceRender: (newUIElement: UIElement, oldUIElement: UIElement) => void;
    static style: (style: UIStyle) => CSSStyleDeclaration & UIStyleProperties;
    /**
    *
    * ### relocate();
    *
    * Relocates a rendered UIElement into another UIElement.
    *
    * The element must already be rendered. The existing DOM element is moved
    * to the target element without creating a new instance.
    *
    * @param element - The rendered UIElement to relocate.
    * @param forElement - The UIElement that will receive the relocated element.
    *
    * @public
    */
    relocate: (element: UIElement, forElement: UIElement) => void;
}
