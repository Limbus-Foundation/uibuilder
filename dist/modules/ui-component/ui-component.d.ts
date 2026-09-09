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
* @param option.text - Button label
*
* @see {@link UIButton.id}
* @see {@link UIButton.className}
* @see {@link UIButton.classList}
* @see {@link UIButton.attribute}
* @see {@link UIButton.removeAttribute}
* @see {@link UIButton.removeClassName}
* @see {@link UIButton.remove}
* @see {@link UIButton.append}
* @see {@link UIButton.label}
*
* @example
* ```ts
* const btn = UIBuilder.button({ text : "label" });
* ```
* @public
*/
export declare function UIComponent<T extends object, P extends Record<string, any>>(comp: (props: P, self: {
    stateListen: (callback: (state: P) => void) => void;
}) => T): (props?: Partial<P>) => T & {
    state(state: Partial<P>): void;
};
