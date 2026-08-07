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
export declare class UIBody {
    static append: (element: UIElement) => HTMLElement;
    static prepend: (element: UIElement) => void;
}
