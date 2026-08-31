// UI ROUTER :

import { UIElement } from "../ui-element/ui-element.js";
import { UIBlend } from "../ui-blend/ui-blend.js";
import { UIBuilder } from "../../ui-builder/ui-builder.js";
import { UIBody } from "../ui-body/ui-body.js";

export class UIRouter {

    private static routes = new Map<string, UIElement | UIBlend>();
    private static currentPath: string = "";
    private static rootRouter: UIElement | typeof UIBody = UIBody;

    private static elements = (element: UIElement | UIBlend): UIElement[] => {
        if (element instanceof UIBlend) return [...element];

        return [element];
    };

    public static root = (element: UIElement): void => {
        UIRouter.rootRouter = element;
    };

    public static route = (path: string, element: UIElement | UIBlend): void => {
        UIRouter.routes.set(path, element);
    };

    public static navigate = (path: string): void => {

        if (path === UIRouter.currentPath) return;

        history.pushState({}, "", path);
        UIRouter.check();
    };

    public static back = (): void => history.back();

    public static forward = (): void => history.forward();

    public static check = (): void => {

        const path = window.location.pathname;

        if (path === UIRouter.currentPath) return;

        const previous = UIRouter.routes.get(UIRouter.currentPath);
        const current = UIRouter.routes.get(path);

        if (previous) {
            for (const element of UIRouter.elements(previous)) {
                if (element.get().parentNode === document.body) {
                    UIRouter.rootRouter.unrender(element);
                }
            }
        }

        if (current) {
            for (const element of UIRouter.elements(current)) {
                if (!element.get().parentNode) {
                    UIRouter.rootRouter.render(element);
                }
            }
        }

        UIRouter.currentPath = path;
    };

    public static init = (): void => {

        window.addEventListener("popstate", UIRouter.check);

        UIRouter.check();
    };

}