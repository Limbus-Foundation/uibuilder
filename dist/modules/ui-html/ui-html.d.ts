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
    static parseHTMLElement: (element: UIElement) => HTMLElement;
    static parseUIElement: (element: HTMLElement) => UIElement;
}
