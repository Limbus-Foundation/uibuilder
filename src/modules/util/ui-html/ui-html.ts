
// UI HTML : 

import { UICustom } from "../../element/ui-custom/ui-custom.js";
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
    public static parseUIElement = (element: HTMLElement): UIElement => {

        const parsedHTMLElement = new UICustom({
            tag: element.tagName.toLowerCase() as keyof HTMLElementTagNameMap,
            id: element.id,
            className: element.classList.value,
            content: element.textContent ?? "",
            attribute: Object.fromEntries(Array.from(element.attributes).map(attribute => [attribute.name, attribute.value]))
        });

        element.replaceWith(parsedHTMLElement.__get());

        return parsedHTMLElement;

    };


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
    public static rendered = ( selector: string | UIElement ): HTMLElement | NodeListOf<HTMLElement> | null => {

        if (!selector) return null; 

        if (typeof selector !== "string") return selector.__getIsRendered() ? selector.__get() : null;

        if (selector.startsWith('...')) {
            const className = "." + selector.slice(3); 
            return document.querySelectorAll<HTMLElement>(className);
        };

        if (selector.startsWith('.')) return document.querySelector<HTMLElement>(selector);

        const id: string = selector.startsWith('#') ? selector.slice(1) : selector;

        return document.getElementById(id); 
    };

};   