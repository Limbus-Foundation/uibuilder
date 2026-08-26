import { UIGeneric } from "../ui-generic/ui-generic.js";
export interface IUIButton {
    id?: string;
    classList?: string[];
    className?: string;
    attribute?: {
        name: string;
        value: string;
    }[];
    label?: string;
}
/**
 *
 * #### UIBuilder.UIButton
 *
 * Wrapper class for creating and managing an `HtmlButtonElement `.
 *
 * @param option - Configuration object to initialize the input element.
 * @param option.id - Unique ID for the HTML element.
 * @param option.className - Single class name string.
 * @param option.classList - List of CSS class names.
 * @param option.attribute - Custom HTML attributes list.
 * @param option.label - Button label
 *
 * @example
 * ```ts
 * const btn = new UIButton({ text : "label" });
 * ```
 * @public
 */
export declare class UIButton extends UIGeneric {
    private element;
    constructor(option: IUIButton);
}
