import { UIElement } from "../ui-element/ui-element.js";
export type EventCallback<K extends keyof HTMLElementEventMap> = (e: HTMLElementEventMap[K]) => void;
/**
 * ### UIEvent
 *
 * Gerenciador de eventos associado a uma instância de `UIElement`.
 *
 * @see {@link UIEvent.add}
 * @see {@link UIEvent.remove}
 * @public
 */
export declare class UIEvent {
    private element;
    constructor(element: UIElement);
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
    add: <K extends keyof HTMLElementEventMap>(event: K, callback: EventCallback<K>) => this;
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
    remove: <K extends keyof HTMLElementEventMap>(event: K, callback: EventCallback<K>) => this;
}
