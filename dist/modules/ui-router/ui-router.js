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
    static elements = (element) => {
        if (element instanceof UIBlend)
            return [...element];
        return [element];
    };
    static root = (element) => {
        UIRouter.rootRouter = element;
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
        history.pushState({}, "", path);
        UIRouter.check();
    };
    static back = () => history.back();
    static forward = () => history.forward();
    static outRoute = (element) => {
        UIRouter.registeredOutRoute = element;
    };
    static check = () => {
        const path = window.location.pathname;
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
    };
    static init = () => {
        window.addEventListener("popstate", UIRouter.check);
        UIRouter.check();
    };
}
//# sourceMappingURL=ui-router.js.map