// UI ROUTER :
import { UIBlend } from "../ui-blend/ui-blend.js";
import { UIBody } from "../ui-body/ui-body.js";
export class UIRouter {
    static routes = new Map();
    static currentPath = "";
    static rootRouter = UIBody;
    static lastRouteContent = [];
    static registeredRouteList = [];
    static registeredOutRoute;
    static listenRouteCallbackMap = new Map();
    static basePath = "/";
    static elements = (element) => {
        if (element instanceof UIBlend)
            return [...element];
        return [element];
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
        if (path === UIRouter.currentPath)
            return;
        history.pushState({}, "", `${UIRouter.basePath === "/" ? "" : UIRouter.basePath}${path}`);
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
    static check = () => {
        const path = UIRouter.resolvePath();
        if (path === UIRouter.currentPath)
            return;
        const current = UIRouter.routes.get(path);
        const next = current ?? UIRouter.registeredOutRoute;
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
        const callbacks = UIRouter.listenRouteCallbackMap.get(path);
        if (callbacks) {
            for (const callback of callbacks) {
                callback();
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