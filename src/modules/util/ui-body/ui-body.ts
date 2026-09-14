
// UI BODY :

import { UIRender, UIRenderOrganization } from "../../internal/ui-render/ui-render.js";
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
export class UIBody {
    
    public static render = (element: UIElement | UIBlend, organization : UIRenderOrganization = "below" ): void => {
        new UIRender(document.body, element, organization);
    }
    
    public static unrender = (element: UIElement | UIBlend): void => {

        if (element instanceof UIBlend) {
            for (const el of element) {
                if (el.__getIsRendered() === false) {
                    console.warn("UIBuilder > Element " + el.__get().tagName.toLowerCase() + " cannot be unrendered because it is not rendered!");
                    return;
                };
                el.__get().remove();
            }
            return;
        };

        if (element.__getIsRendered() === false) {
            console.warn("UIBuilder > Element " + element.__get().tagName.toLowerCase() + " cannot be unrendered because it is not rendered!");
            return;
        };

        element.__get().remove();
    };

    public static replaceRender = (newUIElement: UIElement, oldUIElement: UIElement): void => {
        document.body.replaceChild(newUIElement.__get(), oldUIElement.__get());
    };

    public static style = ( style : UIStyle ) : CSSStyleDeclaration & UIStyleProperties => Object.assign(document.body.style, style.properties);

    /**
     * #### __get();
     * 
     * internal ( soft-private ) function to get the real instance of an element.
     * 
     * @see {@link UIGeneric.__get}
     *
     * @internal
     */
    public static __get = (): HTMLBodyElement => document.body as HTMLBodyElement;

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
    public relocate = ( element : UIElement, forElement : UIElement): void => {

        if (element.__getIsRendered() === false) {
            console.warn("UIBuilder > Element " + element.__get().tagName.toLowerCase() + " is not rendered!");
            return;
        };

        forElement.__get().appendChild(element.__get());
    };


    
};

