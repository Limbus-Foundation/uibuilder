
// UI EVENT : 

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
export class UIEvent {

    private element: UIElement | typeof UIBody;

    public constructor(element: UIElement | typeof UIBody) {
        this.element = element;
    };

    public add = <K extends keyof HTMLElementEventMap>(event: K, callback: EventCallback<K>): this => {
        this.element.__get().addEventListener(event, callback as EventListener);
        return this;
    };

    public remove = <K extends keyof HTMLElementEventMap>(event: K, callback: EventCallback<K>): this => {
        this.element.__get().removeEventListener(event, callback as EventListener);
        return this;
    };
}