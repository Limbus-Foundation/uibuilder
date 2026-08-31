// UI ROUTE BUTTON :
import { UIGeneric } from "../ui-generic/ui-generic.js";
import { UIRouter } from "../ui-router/ui-router.js";
/**
 *
 * #### UIBuilder.UIRouteButton
 *
 * Wrapper class for creating and managing a route `<a>` element.
 *
 * The `UIRouteButton` navigates through `UIRouter` without reloading the page.
 *
 * @param option - Configuration object to initialize the route button.
 * @param option.id - Unique ID for the HTML element.
 * @param option.className - Single class name string.
 * @param option.classList - List of CSS class names.
 * @param option.attribute - Custom HTML attributes.
 * @param option.label - Link label.
 * @param option.path - Route path.
 *
 * @example
 * ```ts
 * const button = new UIRouteButton({
 *     label: "Get Started",
 *     path: "/get-started"
 * });
 * ```
 *
 * @public
 */
export class UIRouteButton extends UIGeneric {
    element;
    constructor(option) {
        const element = document.createElement("a");
        super(element);
        this.element = element;
        if (option.id)
            this.element.id = option.id;
        if (option.className)
            this.element.className = option.className;
        if (option.classList?.length) {
            this.element.classList.add(...option.classList);
        }
        if (option.label)
            this.element.textContent = option.label;
        this.element.href = option.path;
        if (option.attribute) {
            for (const attribute of option.attribute) {
                this.element.setAttribute(attribute.name, attribute.value);
            }
        }
        this.element.addEventListener("click", event => {
            event.preventDefault();
            UIRouter.navigate(option.path);
        });
    }
    label = (label) => void (this.element.textContent = label);
    path = (path) => {
        this.element.href = path;
    };
}
//# sourceMappingURL=ui-route-button.js.map