
// UI ROUTER :

import { UIElement } from "../ui-element/ui-element.js";
import { UIBlend } from "../ui-blend/ui-blend.js";
import { UIBody } from "../ui-body/ui-body.js";

export class UIRouter {

    private static routes = new Map<string, UIElement | UIBlend>();
    private static currentPath: string = "";
    private static rootRouter: UIElement | typeof UIBody = UIBody;
    private static lastRouteContent: UIElement[] = [];
    private static registeredRouteList: string[] = [];
    private static registeredOutRoute: UIElement | UIBlend; 

    private static elements = (element: UIElement | UIBlend): UIElement[] => {
        if (element instanceof UIBlend) return [...element];

        return [element]; 
    };

    public static root = (element: UIElement): void => {
        UIRouter.rootRouter = element;
    };

    public static route = (path: string, element: UIElement | UIBlend): void => {

        UIRouter.routes.set(path, element);

        if (!UIRouter.registeredRouteList.includes(path)) {
            UIRouter.registeredRouteList.push(path);
        };
    };

    public static navigate = (path: string): void => {

        if (path === UIRouter.currentPath) return;

        history.pushState({}, "", path);
        UIRouter.check();
    };

    public static back = (): void => history.back();

    public static forward = (): void => history.forward();

    public static outRoute = (element: UIElement | UIBlend): void => {
        UIRouter.registeredOutRoute = element;
    };

    private static check = (): void => {

        const path = window.location.pathname;

        if (path === UIRouter.currentPath) return;

        const current = UIRouter.routes.get(path);
        const next = current ?? UIRouter.registeredOutRoute;

        if (!next) return;

        const elements = UIRouter.elements(next);

        if (UIRouter.lastRouteContent.length === 0) {

            for (const element of elements) {
                UIRouter.rootRouter.render(element);
            };

        } else {

            const previous = UIRouter.lastRouteContent;
            const length = Math.max(previous.length, elements.length);

            for (let index = 0; index < length; index++) {

                const oldElement = previous[index];
                const newElement = elements[index];

                if (oldElement && newElement) {

                    UIRouter.rootRouter.replaceRender(newElement, oldElement);

                } else if (newElement) {

                    UIRouter.rootRouter.render(newElement);

                } else if (oldElement) {

                    UIRouter.rootRouter.unrender(oldElement);

                };
            };
        };

        UIRouter.lastRouteContent = elements;
        UIRouter.currentPath = path;
    };

    public static init = (): void => {

        window.addEventListener("popstate", UIRouter.check);

        UIRouter.check();
    };

}