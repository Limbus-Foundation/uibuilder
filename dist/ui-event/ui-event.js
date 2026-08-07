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
    /**
     * ### add
     *
     * Adiciona um ouvinte de evento ao elemento vinculado.
     *
     * @param event - Nome do evento HTML.
     * @param callback - Função executada quando o evento dispara.
     * @returns `this` (permite encadeamento de métodos).
     * @public
     */
    add = (event, callback) => {
        this.element.get().addEventListener(event, callback);
        return this;
    };
    /**
     * ### remove
     *
     * Remove um ouvinte de evento do elemento vinculado.
     *
     * @param event - Nome do evento HTML.
     * @param callback - Referência da função callback que foi vinculada.
     * @returns `this` (permite encadeamento de métodos).
     * @public
     */
    remove = (event, callback) => {
        this.element.get().removeEventListener(event, callback);
        return this;
    };
}
//# sourceMappingURL=ui-event.js.map