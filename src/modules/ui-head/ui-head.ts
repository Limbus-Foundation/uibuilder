
// UI HEAD : 

import { UIElement } from "../ui-element/ui-element.js";

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
    public static append = (element: UIElement): HTMLElement => document.head.appendChild(element.__get());
};