// UI HTML : 
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
    static parseUIElement = (element) => element.__get();
}
;
//# sourceMappingURL=ui-html.js.map