
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
export function UIComponent<T extends object, P extends Record<string, any>>( comp : ( props: P, self: { stateListen: (callback: (state: P) => void) => void;}) => T) : (props?: Partial<P>) => T & { state(state: Partial<P>): void; } {

    return (initialState = {}) => {

        let state = { ...initialState } as P;

        const listeners: ((state: P) => void)[] = [];

        const self = {
            stateListen: (callback: (state: P) => void) => {
                listeners.push(callback);
            }
        };

        const component = comp (state, self); 

        const result = component as T & {
            state(state: Partial<P>): void;
        };

        result.state = (value) => {
            state = { ...state, ...value };

            for (const listener of listeners) listener(state);
            
        };

        return result;
    };

};