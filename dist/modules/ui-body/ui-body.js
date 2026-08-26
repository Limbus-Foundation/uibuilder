// UI BODY :
import { UIAppend } from "../ui-append/ui-append.js";
import { UIBlend } from "../ui-blend/ui-blend.js";
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
    static render = (element, organization = "below") => new UIAppend(document.body, element, organization);
    unrender = (element) => {
        if (element instanceof UIBlend) {
            for (const el of element)
                document.body.removeChild(el.get());
            return;
        }
        document.body.removeChild(element.get());
    };
    static style = (style) => Object.assign(document.body.style, style.properties);
}
;
//# sourceMappingURL=ui-body.js.map