
// UI ROUTER :

import { UIElement } from "../ui-element/ui-element.js";
import { UIBlend } from "../ui-blend/ui-blend.js";
import { UIBody } from "../ui-body/ui-body.js";

export class UIRouter {

    private static routes = new Map<string, UIElement | UIBlend>();
    private static currentPath: string = "";
    private static currentQuery: string = "";
    private static rootRouter: UIElement | typeof UIBody = UIBody;
    private static lastRouteContent: UIElement[] = [];
    private static registeredRouteList: string[] = [];
    private static registeredOutRoute: UIElement | UIBlend;
    private static listenRouteCallbackMap = new Map<string, (() => void)[]>();
    private static listenQueryCallbackMap = new Map<string, ((queries: Record<string, string>) => void)[]>();
    private static listenParamCallbackMap = new Map<string, ((params: Record<string, string>) => void)[]>();
    private static basePath: string = "/";
    private static listenAllRouteCallbackList: ((route: string) => void)[] = [];

    private static elements = (element: UIElement | UIBlend): UIElement[] => {
        if (element instanceof UIBlend) return [...element];
        return [element]; 
    };

    public static listenAllRoute = (callback: (route: string) => void): void => {
        UIRouter.listenAllRouteCallbackList.push(callback);
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

    private static resolveQuery = (): Record<string, string> => {

        const queries: Record<string, string> = {};

        for (const [key, value] of new URLSearchParams(window.location.search)) {
            queries[key] = value;
        };

        return queries;
    };

    private static matchRoute = (route: string, path: string): Record<string, string> | null => {

        const routeParts = route.split("/").filter(Boolean);
        const pathParts = path.split("/").filter(Boolean);

        if (routeParts.length !== pathParts.length) {

            if (route === "/" && path === "/") {
                return {};
            };

            return null;
        };

        const params: Record<string, string> = {};

        for (let index = 0; index < routeParts.length; index++) {

            const routePart = routeParts[index];
            const pathPart = pathParts[index];

            if (routePart.startsWith(":")) {

                const paramName = routePart.slice(1);

                if (!paramName) {
                    return null;
                };

                params[paramName] = decodeURIComponent(pathPart);

                continue;
            };

            if (routePart !== pathPart) {
                return null;
            };
        };

        return params;
    };

    private static resolveRoute = (path: string): { route: string; element: UIElement | UIBlend; params: Record<string, string> } | null => {

        const routes = [...UIRouter.routes.entries()].sort((a, b) => {

            const aDynamic = a[0].split("/").filter(part => part.startsWith(":")).length;
            const bDynamic = b[0].split("/").filter(part => part.startsWith(":")).length;

            return aDynamic - bDynamic;
        });

        for (const [route, element] of routes) {

            const params = UIRouter.matchRoute(route, path);

            if (params) {
                return {
                    route,
                    element,
                    params
                };
            };
        };

        return null;
    };

    private static resolveRouteBase = (route: string): string => {

        const parts = route.split("/").filter(Boolean);
        const base: string[] = [];

        for (const part of parts) {

            if (part.startsWith(":")) {
                break;
            };

            base.push(part);
        };

        return base.length === 0 ? "/" : `/${base.join("/")}`;
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

        const url = `${UIRouter.basePath === "/" ? "" : UIRouter.basePath}${path}`;

        if (path === UIRouter.currentPath && !window.location.search) return;

        history.pushState({}, "", url);
        UIRouter.check();
    };

    public static retarget = (path: string): void => {

        const url = `${UIRouter.basePath === "/" ? "" : UIRouter.basePath}${path}`;

        history.replaceState({}, "", url);
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

    public static listenQuery = (path: string, callback: (queries: Record<string, string>) => void): void => {

        const callbacks = UIRouter.listenQueryCallbackMap.get(path) ?? [];

        callbacks.push(callback);

        UIRouter.listenQueryCallbackMap.set(path, callbacks);
    };

    public static listenParam = (path: string, callback: (params: Record<string, string>) => void): void => {

        const callbacks = UIRouter.listenParamCallbackMap.get(path) ?? [];

        callbacks.push(callback);

        UIRouter.listenParamCallbackMap.set(path, callbacks);
    };

    private static restoreRootScroll = () : number => UIRouter.rootRouter.__get().scrollTop = 0;

    private static resolveHashRoute = (): void => {

        const hash = window.location.hash;

        if (hash) {
            document.querySelector(hash)?.scrollIntoView();
            return;
        };

        UIRouter.restoreRootScroll();

    };  

    private static check = (): void => { 

        const path = UIRouter.resolvePath();

        const query = window.location.search;

        const pathChanged = path !== UIRouter.currentPath;
        const queryChanged = query !== UIRouter.currentQuery;

        if (!pathChanged && !queryChanged) return;

        const resolvedRoute = UIRouter.resolveRoute(path);
        const current = resolvedRoute?.element;
        const next = current ?? UIRouter.registeredOutRoute;

        if (pathChanged) {

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
 
            for (const callback of UIRouter.listenAllRouteCallbackList) {
                callback(resolvedRoute ? UIRouter.resolveRouteBase(resolvedRoute.route) : path);
            };

            const routeBase = resolvedRoute ? UIRouter.resolveRouteBase(resolvedRoute.route) : path;

            const routeCallbacks = UIRouter.listenRouteCallbackMap.get(routeBase);

            if (routeCallbacks) {

                for (const callback of routeCallbacks) {
                    callback();
                };
            };

            if (resolvedRoute) {

                const paramCallbacks = UIRouter.listenParamCallbackMap.get(routeBase);

                if (paramCallbacks) {

                    for (const callback of paramCallbacks) {
                        callback(resolvedRoute.params);
                    };
                };
            };
        };

        UIRouter.currentQuery = query;

        if (resolvedRoute) {

            const routeBase = UIRouter.resolveRouteBase(resolvedRoute.route);
            const queryCallbacks = UIRouter.listenQueryCallbackMap.get(routeBase);

            if (queryCallbacks) {

                const queries = UIRouter.resolveQuery();

                for (const callback of queryCallbacks) {
                    callback(queries);
                };
            };
        };

        UIRouter.resolveHashRoute();
        
    };

    public static init = (): void => {

        window.addEventListener("popstate", UIRouter.check);

        UIRouter.check();
    };

};
