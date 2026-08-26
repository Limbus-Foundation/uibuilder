// UI ROUTER :
import { UIBlend } from "../ui-blend/ui-blend.js";
import { UIBuilder } from "../../ui-builder/ui-builder.js";
export class UIRouter {
    static routes = new Map();
    static elements = (element) => {
        if (element instanceof UIBlend) {
            return [...element];
        }
        return [element];
    };
    static route = (path, element) => {
        UIRouter.routes.set(path, element);
    };
    static navigate = (path) => {
        history.pushState({}, "", path);
        UIRouter.check();
    };
    static back = () => history.back();
    static forward = () => history.forward();
    static check = () => {
        const currentPath = window.location.pathname;
        for (const [path, element] of UIRouter.routes) {
            const elements = UIRouter.elements(element);
            if (path === currentPath) {
                for (const element of elements) {
                    if (!element.get().parentNode) {
                        UIBuilder.body.render(element);
                    }
                }
                ;
            }
            else {
                for (const element of elements) {
                    if (element.get().parentNode) {
                        element.get().remove();
                    }
                }
            }
        }
    };
    static init = () => {
        window.addEventListener("popstate", UIRouter.check);
        UIRouter.check();
    };
}
//# sourceMappingURL=ui-router.js.map