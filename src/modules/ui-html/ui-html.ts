
// UI HTML : 

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
     * ### parseUIElement
     * 
     * Converts a UIElement into its native HTMLElement.
     *
     * @returns `HTMLElement`.
     * @param element - UIElement
     *
     * @public
     * @static
     */
    public static parseUIElement = ( element : UIElement ) : HTMLElement => element.__get();
};   