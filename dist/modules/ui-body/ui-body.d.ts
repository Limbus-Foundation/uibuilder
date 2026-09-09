import { UIRenderOrganization } from "../ui-render/ui-render.js";
import { UIBlend } from "../ui-blend/ui-blend.js";
import { UIElement } from "../ui-element/ui-element.js";
import { UIStyle, UIStyleProperties } from "../ui-style/ui-style.js";
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
}
