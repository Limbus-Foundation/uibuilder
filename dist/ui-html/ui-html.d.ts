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
export declare class UIHtml {
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
    static parseUIElement: (element: UIElement) => HTMLElement;
}
