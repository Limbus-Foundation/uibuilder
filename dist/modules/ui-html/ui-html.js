// UI HTML : 
import { UICustom } from "../ui-custom/ui-custom.js";
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
    static parseHTMLElement = (element) => element.__get();
    static parseUIElement = (element) => {
        return new UICustom({
            tag: element.tagName.toLowerCase()
        });
    };
}
;
//# sourceMappingURL=ui-html.js.map