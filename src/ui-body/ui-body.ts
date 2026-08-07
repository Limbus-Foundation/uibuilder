
// UI BODY :

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
    public static append = (element: UIElement): HTMLElement => document.body.appendChild(element.get());
    public static prepend = (element: UIElement): void => document.body.prepend(element.get());
};