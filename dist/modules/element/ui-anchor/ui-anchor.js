// UI ANCHOR :
import { UIGeneric } from "../../internal/ui-generic/ui-generic.js";
import { UIRouter } from "../../util/ui-router/ui-router.js";
/**
 *
 * #### UIBuilder.UIAnchor
 *
 * Wrapper class for creating and managing a route `<a>` element.
 *
 * The `UIAnchor` navigates through `UIRouter` without reloading the page.
 *
 * @param option - Configuration object to initialize the route button.
 * @param option.id - Unique ID for the HTML element.
 * @param option.className - Single class name string.
 * @param option.classList - List of CSS class names.
 * @param option.attribute - Custom HTML attributes.
 * @param option.label - Link label.
 * @param option.content - content.
 * @param option.path - Route path.
 *
 * @example
 * ```ts
 * const button = new UIAnchor({
 *     label: "Get Started",
 *     path: "/get-started"
 * });
 * ```
 *
 * @public
 */
export class UIAnchor extends UIGeneric {
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
        if (option.content)
            this.element.textContent = option.content;
        this.element.href = option.path;
        if (option?.attribute) {
            Object.entries(option.attribute).forEach(([name, value]) => {
                this.element.setAttribute(name, String(value));
            });
        }
        this.element.addEventListener("click", event => {
            event.preventDefault();
            UIRouter.navigate(option.path);
        });
    }
    ;
    path = (path) => {
        this.element.href = path;
    };
}
//# sourceMappingURL=ui-anchor.js.map