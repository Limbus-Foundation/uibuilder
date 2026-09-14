import { UIElement } from "../../internal/ui-element/ui-element.js";
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
    /**
     *
     * ### parseUIElement
     *
     * Converts an HTMLElement into a UIElement.
     * Replaces the original `HTMLElement` with the parsed `UIElement`. The original element is removed from the DOM, causing its event listeners and other references associated with it to be lost.
     *
     * @returns `UIElement`.
     * @param element - HTMLElement
     *
     * @public
     * @static
     */
    static parseUIElement: (element: HTMLElement) => UIElement;
    /**
     *
     * ### rendered
     *
     * Returns a rendered element from the DOM using a selector or UIElement.
     *
     * @returns `Element`, `NodeListOf<Element>`, or `null`.
     * @param selector - `#id` | `.className` | `...className` | UIElement
     *
     * @public
     * @static
     */
    static rendered: (selector: string | UIElement) => HTMLElement | NodeListOf<HTMLElement> | null;
}
