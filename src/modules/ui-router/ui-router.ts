// UI ROUTER :

import { UIElement } from "../ui-element/ui-element.js";
import { UIBlend } from "../ui-blend/ui-blend.js";
import { UIBuilder } from "../../ui-builder/ui-builder.js";

export class UIRouter {

    private static routes = new Map<string, UIElement | UIBlend>();

    private static elements = (element: UIElement | UIBlend): UIElement[] => {
        if (element instanceof UIBlend) {
            return [...element];
        }

        return [element];
    };

    public static route = (path: string, element: UIElement | UIBlend): void => {
        UIRouter.routes.set(path, element);
    };

    public static navigate = (path: string): void => {
        history.pushState({}, "", path);
        UIRouter.check();
    };

    public static back = (): void => history.back();

    public static forward = (): void => history.forward();

    public static check = (): void => {

        const currentPath = window.location.pathname;

        for (const [path, element] of UIRouter.routes) {

            const elements = UIRouter.elements(element);

            if (path === currentPath) {

                for (const element of elements) {
                    if (!element.get().parentNode) {
                        UIBuilder.body.render(element)
                    }
                };

            } else {

                for (const element of elements) {
                    if (element.get().parentNode) {
                        element.get().remove();
                    }
                }

            }
        }
    };

    public static init = (): void => {
        window.addEventListener("popstate", UIRouter.check);
        UIRouter.check();
    };

}