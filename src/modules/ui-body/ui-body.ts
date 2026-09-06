
// UI BODY :

import { UIRender, UIRenderOrganization } from "../ui-render/ui-render.js";
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
export class UIBody {
    
    public static render = (element: UIElement | UIBlend, organization : UIRenderOrganization = "below" ): void => {
        new UIRender(document.body, element, organization);
    }
    
    public static unrender = (element: UIElement | UIBlend): void => {

        if (element instanceof UIBlend) {
            for (const el of element) document.body.removeChild(el.__get());
            return;
        };

        document.body.removeChild(element.__get());
    };

    public static replaceRender = (newUIElement: UIElement, oldUIElement: UIElement): void => {
        document.body.replaceChild(newUIElement.__get(), oldUIElement.__get());
    };

    public static style = ( style : UIStyle ) : CSSStyleDeclaration & UIStyleProperties => Object.assign(document.body.style, style.properties);

    public static __get = (): HTMLBodyElement => document.body as HTMLBodyElement;


    
};

