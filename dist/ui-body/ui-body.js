// UI BODY :
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
 * @public
 * @static
 */
export class UIBody {
    static append = (element) => document.body.appendChild(element.get());
    static prepend = (element) => document.body.prepend(element.get());
}
;
//# sourceMappingURL=ui-body.js.map