// UI ROUTER :
import { UIBlend } from "../ui-blend/ui-blend.js";
import { UIBuilder } from "../../ui-builder/ui-builder.js";
export class UIRouter {
    static routes = new Map();
    static currentPath = "";
    static elements = (element) => {
        if (element instanceof UIBlend)
            return [...element];
        return [element];
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
        const previous = UIRouter.routes.get(UIRouter.currentPath);
        const current = UIRouter.routes.get(path);
        if (previous) {
            for (const element of UIRouter.elements(previous)) {
                if (element.get().parentNode === document.body) {
                    UIBuilder.body.unrender(element);
                }
            }
        }
        if (current) {
            for (const element of UIRouter.elements(current)) {
                if (!element.get().parentNode) {
                    UIBuilder.body.render(element);
                }
            }
        }
        UIRouter.currentPath = path;
    };
    static init = () => {
        window.addEventListener("popstate", UIRouter.check);
        UIRouter.check();
    };
}
//# sourceMappingURL=ui-router.js.map