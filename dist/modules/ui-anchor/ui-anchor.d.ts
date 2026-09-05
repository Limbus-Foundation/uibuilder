import { UIGeneric } from "../ui-generic/ui-generic.js";
export interface IUIAnchor {
    id?: string;
    classList?: string[];
    className?: string;
    attribute?: {
        name: string;
        value: string;
    }[];
    label?: string;
    path: string;
}
/**
 *
 * #### UIBuilder.UIAnchor
 *
 * Wrapper class for creating and managing a route `<a>` element.
 *
 * The `UIAnchor` navigates through `UIRouter` without reloading the page.
 *
 * @param option - Configuration object to initialize the route button.
 * @param option.id - Unique ID for the HTML element.
 * @param option.className - Single class name string.
 * @param option.classList - List of CSS class names.
 * @param option.attribute - Custom HTML attributes.
 * @param option.label - Link label.
 * @param option.path - Route path.
 *
 * @example
 * ```ts
 * const button = new UIAnchor({
 *     label: "Get Started",
 *     path: "/get-started"
 * });
 * ```
 *
 * @public
 */
export declare class UIAnchor extends UIGeneric {
    private element;
    constructor(option: IUIAnchor);
    label: (label: string) => void;
    path: (path: string) => void;
}
