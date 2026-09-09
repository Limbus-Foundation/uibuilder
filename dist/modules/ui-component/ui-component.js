// UI COMPONENT :
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
export function UIComponent(comp) {
    return (initialState = {}) => {
        let state = { ...initialState };
        const listeners = [];
        const self = {
            stateListen: (callback) => {
                listeners.push(callback);
            }
        };
        const component = comp(state, self);
        const result = component;
        result.state = (value) => {
            state = { ...state, ...value };
            for (const listener of listeners)
                listener(state);
        };
        return result;
    };
}
;
//# sourceMappingURL=ui-component.js.map