import { UIElement } from "../../internal/ui-element/ui-element.js";
export declare class UISwitcher {
    private switcherRoot;
    private switchList;
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
    register: (switchElement: UIElement) => Object;
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
    root: (switcherRoot: UIElement) => void;
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
    unregister: (switchElement: UIElement) => void;
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
    switch: (switchElement: UIElement) => void;
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
    current: () => UIElement | null;
}
