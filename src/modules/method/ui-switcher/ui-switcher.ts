
// UI SWITCHER : 

import { UIElement } from "../../internal/ui-element/ui-element.js";

export class UISwitcher {

    private switcherRoot: UIElement | null = null;
    private switchList: UIElement[] = [];

    /**
     * 
     * ### register
     * 
     * Registers a `UIElement` in the `UISwitcher`.
     *
     * @param switchElement `UIElement` to register.
     *
     * @returns An object containing the `register` method for chaining.
     *
     * @see {@link UIElement}
     *
     * @public
     */
    public register = (switchElement: UIElement): Object => {
        this.switchList.push(switchElement);
        return { register: this.register.bind(this) };
    };

    /**
     * 
     * ### root
     * 
     * Defines the root `UIElement` where the registered elements will be switched.
     *
     * @param switcherRoot `UIElement` to use as the switcher root.
     *
     * @see {@link UIElement}
     *
     * @public
     */
    public root = (switcherRoot: UIElement): void => {
        this.switcherRoot = switcherRoot;
    };

    /**
     * 
     * ### unregister
     * 
     * Unregisters a `UIElement` from the `UISwitcher`.
     *
     * If the element is currently rendered, it will also be unrendered from the switcher root.
     *
     * @param switchElement `UIElement` to unregister.
     *
     * @see {@link UIElement}
     *
     * @public
     */
    public unregister = (switchElement: UIElement): void => {

        const index = this.switchList.indexOf(switchElement);

        if(this.switcherRoot && switchElement.__getIsRendered()) this.switcherRoot.unrender(switchElement)

        if(index !== -1) this.switchList.splice(index, 1);

    };

    /**
     * 
     * ### switch
     * 
     * Switches the currently rendered element to the specified `UIElement`.
     *
     * @param switchElement `UIElement` to render.
     *
     * @see {@link UIElement}
     *
     * @public
     */
    public switch = (switchElement: UIElement): void => {
        if(this.switcherRoot) {
            this.switchList.forEach(element => {
                if (element.__getIsRendered()) this.switcherRoot?.unrender(element);
                if (element === switchElement) this.switcherRoot?.render(element);
            });
        };
    };

    /**
     * 
     * ### current
     * 
     * Returns the currently rendered `UIElement`.
     *
     * @returns The currently rendered `UIElement`, or `null` if no element is rendered.
     *
     * @see {@link UIElement}
     *
     * @public
     */
    public current = (): UIElement | null => {
        return this.switchList.find(element => element.__getIsRendered()) ?? null;
    };
};