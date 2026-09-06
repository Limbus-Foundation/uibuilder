
// UI HTML : 

import { UIBody } from "../ui-body/ui-body.js";
import { UICustom } from "../ui-custom/ui-custom.js";
import { UIElement } from "../ui-element/ui-element.js";

/**
 * 
 * ### UIHtml
 * 
 * Return a reference to the `UIHtml`.
 *
 * @returns `UIHtml`.
 *
 * @see {@link UIHtml}
 * @see {@link UIHtml.parseUIElement}
 * @public
 * @static
 */
export class UIHtml {

    /**
     * 
     * ### parseHTMLElement
     * 
     * Converts a UIElement into its native HTMLElement.
     *
     * @returns `HTMLElement`.
     * @param element - UIElement
     *
     * @public
     * @static 
     */
    public static parseHTMLElement = ( element : UIElement ) : HTMLElement => element.__get();

    public static parseUIElement = (element: HTMLElement): UIElement => {

        return new UICustom({
            tag: element.tagName.toLowerCase() as keyof HTMLElementTagNameMap
        });

    };
};   