// UI EVENT : 
/**
 * ### UIEvent
 *
 * Gerenciador de eventos associado a uma instância de `UIElement`.
 *
 * @see {@link UIEvent.add}
 * @see {@link UIEvent.remove}
 * @public
 */
export class UIEvent {
    element;
    constructor(element) {
        this.element = element;
    }
    ;
    add = (event, callback) => {
        this.element.__get().addEventListener(event, callback);
        return this;
    };
    remove = (event, callback) => {
        this.element.__get().removeEventListener(event, callback);
        return this;
    };
}
//# sourceMappingURL=ui-event.js.map