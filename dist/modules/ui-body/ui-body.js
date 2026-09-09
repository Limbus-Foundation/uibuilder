// UI BODY :
import { UIRender } from "../ui-render/ui-render.js";
import { UIBlend } from "../ui-blend/ui-blend.js";
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
            for (const el of element)
                document.body.removeChild(el.__get());
            return;
        }
        ;
        document.body.removeChild(element.__get());
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
}
;
//# sourceMappingURL=ui-body.js.map