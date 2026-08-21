
// UI BODY :

import { UIAppend } from "../ui-append/ui-append.js";
import { UIBlend } from "../ui-blend/ui-blend.js";
import { UIElement } from "../ui-element/ui-element.js";

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
    public static append = (element: UIElement | UIBlend): UIAppend => new UIAppend(document.body, element,"END");
    public static prepend = (element: UIElement | UIBlend): UIAppend => new UIAppend(document.body, element,"START");
};