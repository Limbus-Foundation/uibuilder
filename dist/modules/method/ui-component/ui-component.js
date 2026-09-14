// UI COMPONENT :
/**
*
* #### UIBuilder.UIComponent
* @see {@link https://uibuilderdoc.vercel.app/component}
*
* Create a multi-instance UIElement group (component).
*
* @param option - Configuration object to initialize the input element.
*
* @public
*
* @example
* ```ts
* const card  = UIBuilder.component(({ title } , self ) => {
*
*      const cardContainer = UIBuilder.group({ className : "card"});
*      const cardTitle = UIBuilder.label({ label : title });
*
*      cardContainer.render(cardTitle);
*
*      return cardContainer;
* })
*
* const card1 = card({ title : "Hello World"});
*
* UIBuilder.body.render(card1)
*
* ```
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