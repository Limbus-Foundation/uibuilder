import { UIAppend, UIAppendOrganization } from "../ui-append/ui-append.js";
import { UIBlend } from "../ui-blend/ui-blend.js";
import { UIElement } from "../ui-element/ui-element.js";
import { UIStyle, UIStyleProperties } from "../ui-style/ui-style.js";
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
    static render: (element: UIElement | UIBlend, organization?: UIAppendOrganization) => UIAppend;
    static unrender: (element: UIElement | UIBlend) => void;
    static style: (style: UIStyle) => CSSStyleDeclaration & UIStyleProperties;
}
