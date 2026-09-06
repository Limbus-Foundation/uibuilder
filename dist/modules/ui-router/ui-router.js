// UI ROUTER :
import { UIBlend } from "../ui-blend/ui-blend.js";
import { UIBody } from "../ui-body/ui-body.js";
export class UIRouter {
    static routes = new Map();
    static currentPath = "";
    static currentQuery = "";
    static rootRouter = UIBody;
    static lastRouteContent = [];
    static registeredRouteList = [];
    static registeredOutRoute;
    static listenRouteCallbackMap = new Map();
    static listenQueryCallbackMap = new Map();
    static listenParamCallbackMap = new Map();
    static basePath = "/";
    static listenAllRouteCallbackList = [];
    static elements = (element) => {
        if (element instanceof UIBlend)
            return [...element];
        return [element];
    };
    static listenAllRoute = (callback) => {
        UIRouter.listenAllRouteCallbackList.push(callback);
    };
    static resolvePath = () => {
        const pathname = window.location.pathname;
        if (UIRouter.basePath === "/") {
            return pathname;
        }
        ;
        if (pathname === UIRouter.basePath) {
            return "/";
        }
        ;
        if (pathname.startsWith(`${UIRouter.basePath}/`)) {
            return pathname.slice(UIRouter.basePath.length);
        }
        ;
        return pathname;
    };
    static resolveQuery = () => {
        const queries = {};
        for (const [key, value] of new URLSearchParams(window.location.search)) {
            queries[key] = value;
        }
        ;
        return queries;
    };
    static matchRoute = (route, path) => {
        const routeParts = route.split("/").filter(Boolean);
        const pathParts = path.split("/").filter(Boolean);
        if (routeParts.length !== pathParts.length) {
            if (route === "/" && path === "/") {
                return {};
            }
            ;
            return null;
        }
        ;
        const params = {};
        for (let index = 0; index < routeParts.length; index++) {
            const routePart = routeParts[index];
            const pathPart = pathParts[index];
            if (routePart.startsWith(":")) {
                const paramName = routePart.slice(1);
                if (!paramName) {
                    return null;
                }
                ;
                params[paramName] = decodeURIComponent(pathPart);
                continue;
            }
            ;
            if (routePart !== pathPart) {
                return null;
            }
            ;
        }
        ;
        return params;
    };
    static resolveRoute = (path) => {
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
            }
            ;
        }
        ;
        return null;
    };
    static resolveRouteBase = (route) => {
        const parts = route.split("/").filter(Boolean);
        const base = [];
        for (const part of parts) {
            if (part.startsWith(":")) {
                break;
            }
            ;
            base.push(part);
        }
        ;
        return base.length === 0 ? "/" : `/${base.join("/")}`;
    };
    static root = (element) => {
        UIRouter.rootRouter = element;
    };
    static base = (path) => {
        UIRouter.basePath = path === "/" ? "/" : `/${path.replace(/^\/|\/$/g, "")}`;
    };
    static route = (path, element) => {
        UIRouter.routes.set(path, element);
        if (!UIRouter.registeredRouteList.includes(path)) {
            UIRouter.registeredRouteList.push(path);
        }
        ;
    };
    static navigate = (path) => {
        const url = `${UIRouter.basePath === "/" ? "" : UIRouter.basePath}${path}`;
        if (path === UIRouter.currentPath && !window.location.search)
            return;
        history.pushState({}, "", url);
        UIRouter.check();
    };
    static retarget = (path) => {
        const url = `${UIRouter.basePath === "/" ? "" : UIRouter.basePath}${path}`;
        history.replaceState({}, "", url);
        UIRouter.check();
    };
    static back = () => history.back();
    static forward = () => history.forward();
    static outRoute = (element) => {
        UIRouter.registeredOutRoute = element;
    };
    static listenRoute = (path, callback) => {
        const callbacks = UIRouter.listenRouteCallbackMap.get(path) ?? [];
        callbacks.push(callback);
        UIRouter.listenRouteCallbackMap.set(path, callbacks);
    };
    static listenQuery = (path, callback) => {
        const callbacks = UIRouter.listenQueryCallbackMap.get(path) ?? [];
        callbacks.push(callback);
        UIRouter.listenQueryCallbackMap.set(path, callbacks);
    };
    static listenParam = (path, callback) => {
        const callbacks = UIRouter.listenParamCallbackMap.get(path) ?? [];
        callbacks.push(callback);
        UIRouter.listenParamCallbackMap.set(path, callbacks);
    };
    static check = () => {
        const path = UIRouter.resolvePath();
        const query = window.location.search;
        const pathChanged = path !== UIRouter.currentPath;
        const queryChanged = query !== UIRouter.currentQuery;
        if (!pathChanged && !queryChanged)
            return;
        const resolvedRoute = UIRouter.resolveRoute(path);
        const current = resolvedRoute?.element;
        const next = current ?? UIRouter.registeredOutRoute;
        if (pathChanged) {
            if (!next)
                return;
            const elements = UIRouter.elements(next);
            const previous = UIRouter.lastRouteContent;
            if (previous.length === 0) {
                for (const element of elements) {
                    UIRouter.rootRouter.render(element);
                }
                ;
            }
            else {
                const length = Math.max(previous.length, elements.length);
                for (let index = 0; index < length; index++) {
                    const oldElement = previous[index];
                    const newElement = elements[index];
                    if (oldElement && newElement) {
                        if (oldElement.__get().parentNode) {
                            UIRouter.rootRouter.replaceRender(newElement, oldElement);
                        }
                        else {
                            UIRouter.rootRouter.render(newElement);
                        }
                        ;
                    }
                    else if (newElement) {
                        UIRouter.rootRouter.render(newElement);
                    }
                    else if (oldElement) {
                        if (oldElement.__get().parentNode) {
                            UIRouter.rootRouter.unrender(oldElement);
                        }
                        ;
                    }
                    ;
                }
                ;
            }
            ;
            UIRouter.lastRouteContent = elements;
            UIRouter.currentPath = path;
            for (const callback of UIRouter.listenAllRouteCallbackList) {
                callback(resolvedRoute ? UIRouter.resolveRouteBase(resolvedRoute.route) : path);
            }
            ;
            const routeBase = resolvedRoute ? UIRouter.resolveRouteBase(resolvedRoute.route) : path;
            const routeCallbacks = UIRouter.listenRouteCallbackMap.get(routeBase);
            if (routeCallbacks) {
                for (const callback of routeCallbacks) {
                    callback();
                }
                ;
            }
            ;
            if (resolvedRoute) {
                const paramCallbacks = UIRouter.listenParamCallbackMap.get(routeBase);
                if (paramCallbacks) {
                    for (const callback of paramCallbacks) {
                        callback(resolvedRoute.params);
                    }
                    ;
                }
                ;
            }
            ;
        }
        ;
        UIRouter.currentQuery = query;
        if (resolvedRoute) {
            const routeBase = UIRouter.resolveRouteBase(resolvedRoute.route);
            const queryCallbacks = UIRouter.listenQueryCallbackMap.get(routeBase);
            if (queryCallbacks) {
                const queries = UIRouter.resolveQuery();
                for (const callback of queryCallbacks) {
                    callback(queries);
                }
                ;
            }
            ;
        }
        ;
    };
    static init = () => {
        window.addEventListener("popstate", UIRouter.check);
        UIRouter.check();
    };
}
//# sourceMappingURL=ui-router.js.map