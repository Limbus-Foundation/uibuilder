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
    private static listenRouteCallbackMap = new Map<string, (() => void)[]>();
    private static basePath: string = "/";

    private static elements = (element: UIElement | UIBlend): UIElement[] => {
        if (element instanceof UIBlend) return [...element];

        return [element];
    };

    private static resolvePath = (): string => {

        const pathname = window.location.pathname;

        if (UIRouter.basePath === "/") {
            return pathname;
        };

        if (pathname === UIRouter.basePath) {
            return "/";
        };

        if (pathname.startsWith(`${UIRouter.basePath}/`)) {
            return pathname.slice(UIRouter.basePath.length);
        };

        return pathname;
    };

    public static root = (element: UIElement): void => {
        UIRouter.rootRouter = element;
    };

    public static base = (path: string): void => {

        UIRouter.basePath = path === "/" ? "/" : `/${path.replace(/^\/|\/$/g, "")}`;
    };

    public static route = (path: string, element: UIElement | UIBlend): void => {

        UIRouter.routes.set(path, element);

        if (!UIRouter.registeredRouteList.includes(path)) {
            UIRouter.registeredRouteList.push(path);
        };
    };

    public static navigate = (path: string): void => {

        if (path === UIRouter.currentPath) return;

        history.pushState({}, "", `${UIRouter.basePath === "/" ? "" : UIRouter.basePath}${path}`);
        UIRouter.check();
    };

    public static back = (): void => history.back();

    public static forward = (): void => history.forward();

    public static outRoute = (element: UIElement | UIBlend): void => {
        UIRouter.registeredOutRoute = element;
    };

    public static listenRoute = (path: string, callback: () => void): void => {

        const callbacks = UIRouter.listenRouteCallbackMap.get(path) ?? [];

        callbacks.push(callback);

        UIRouter.listenRouteCallbackMap.set(path, callbacks);
    };

    private static check = (): void => {

        const path = UIRouter.resolvePath();

        if (path === UIRouter.currentPath) return;

        const current = UIRouter.routes.get(path);
        const next = current ?? UIRouter.registeredOutRoute;

        if (!next) return;

        const elements = UIRouter.elements(next);
        const previous = UIRouter.lastRouteContent;

        if (previous.length === 0) {

            for (const element of elements) {
                UIRouter.rootRouter.render(element);
            };

        } else {

            const length = Math.max(previous.length, elements.length);

            for (let index = 0; index < length; index++) {

                const oldElement = previous[index];
                const newElement = elements[index];

                if (oldElement && newElement) {

                    if (oldElement.__get().parentNode) {
                        UIRouter.rootRouter.replaceRender(newElement, oldElement);
                    } else {
                        UIRouter.rootRouter.render(newElement);
                    };

                } else if (newElement) {

                    UIRouter.rootRouter.render(newElement);

                } else if (oldElement) {

                    if (oldElement.__get().parentNode) {
                        UIRouter.rootRouter.unrender(oldElement);
                    };
                };
            };
        };

        UIRouter.lastRouteContent = elements;
        UIRouter.currentPath = path;

        const callbacks = UIRouter.listenRouteCallbackMap.get(path);

        if (callbacks) {
            for (const callback of callbacks) {
                callback();
            };
        };
    };

    public static init = (): void => {

        window.addEventListener("popstate", UIRouter.check);

        UIRouter.check();
    };

}