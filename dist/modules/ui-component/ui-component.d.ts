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
export declare function UIComponent<T extends object, P extends Record<string, any>>(comp: (props: P, self: {
    stateListen: (callback: (state: P) => void) => void;
}) => T): (props?: Partial<P>) => T & {
    state(state: Partial<P>): void;
};
