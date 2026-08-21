// UI BODY :
import { UIAppend } from "../ui-append/ui-append.js";
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
    static append = (element) => new UIAppend(document.body, element, "END");
    static prepend = (element) => new UIAppend(document.body, element, "START");
}
;
//# sourceMappingURL=ui-body.js.map