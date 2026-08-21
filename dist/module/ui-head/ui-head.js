// UI HEAD : 
/**
 *
 * ### UIHead
 *
 * Return a reference to the `<head>` via `UIHead`.
 *
 * @returns `UIHead`.
 *
 * @see {@link UIBody}
 * @see {@link UIHead.append}
 * @public
 * @static
 */
export class UIHead {
    static append = (element) => document.head.appendChild(element.get());
}
;
//# sourceMappingURL=ui-head.js.map