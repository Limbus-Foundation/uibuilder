// UI BODY :
import { UIRender } from "../../internal/ui-render/ui-render.js";
import { UIBlend } from "../../method/ui-blend/ui-blend.js";
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
export class UIBody {
    static render = (element, organization = "below") => {
        new UIRender(document.body, element, organization);
    };
    static unrender = (element) => {
        if (element instanceof UIBlend) {
            for (const el of element) {
                if (el.__getIsRendered() === false) {
                    console.warn("UIBuilder > Element " + el.__get().tagName.toLowerCase() + " cannot be unrendered because it is not rendered!");
                    return;
                }
                ;
                el.__get().remove();
            }
            return;
        }
        ;
        if (element.__getIsRendered() === false) {
            console.warn("UIBuilder > Element " + element.__get().tagName.toLowerCase() + " cannot be unrendered because it is not rendered!");
            return;
        }
        ;
        element.__get().remove();
    };
    static replaceRender = (newUIElement, oldUIElement) => {
        document.body.replaceChild(newUIElement.__get(), oldUIElement.__get());
    };
    static style = (style) => Object.assign(document.body.style, style.properties);
    /**
     * #### __get();
     *
     * internal ( soft-private ) function to get the real instance of an element.
     *
     * @see {@link UIGeneric.__get}
     *
     * @internal
     */
    static __get = () => document.body;
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
    relocate = (element, forElement) => {
        if (element.__getIsRendered() === false) {
            console.warn("UIBuilder > Element " + element.__get().tagName.toLowerCase() + " is not rendered!");
            return;
        }
        ;
        forElement.__get().appendChild(element.__get());
    };
}
;
//# sourceMappingURL=ui-body.js.map