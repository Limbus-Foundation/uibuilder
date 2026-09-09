import { UIBody } from "../ui-body/ui-body.js";
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
    constructor(element: UIElement | typeof UIBody);
    add: <K extends keyof HTMLElementEventMap>(event: K, callback: EventCallback<K>) => this;
    remove: <K extends keyof HTMLElementEventMap>(event: K, callback: EventCallback<K>) => this;
}
