// UI ROUTER :
import { UIBlend } from "../ui-blend/ui-blend.js";
import { UIBody } from "../ui-body/ui-body.js";
export class UIRouter {
    static routes = new Map();
    static currentPath = "";
    static rootRouter = UIBody;
    static lastRouteContent = [];
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
    };
    static navigate = (path) => {
        if (path === UIRouter.currentPath)
            return;
        history.pushState({}, "", path);
        UIRouter.check();
    };
    static back = () => history.back();
    static forward = () => history.forward();
    static check = () => {
        const path = window.location.pathname;
        if (path === UIRouter.currentPath)
            return;
        const current = UIRouter.routes.get(path);
        for (const element of UIRouter.lastRouteContent) {
            if (element.get().parentNode) {
                UIRouter.rootRouter.unrender(element);
            }
        }
        UIRouter.lastRouteContent = [];
        if (current) {
            const elements = UIRouter.elements(current);
            for (const element of elements) {
                if (!element.get().parentNode) {
                    UIRouter.rootRouter.render(element);
                }
            }
            UIRouter.lastRouteContent = elements;
        }
        UIRouter.currentPath = path;
    };
    static init = () => {
        window.addEventListener("popstate", UIRouter.check);
        UIRouter.check();
    };
}
//# sourceMappingURL=ui-router.js.map