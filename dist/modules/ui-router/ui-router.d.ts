import { UIElement } from "../ui-element/ui-element.js";
import { UIBlend } from "../ui-blend/ui-blend.js";
export declare class UIRouter {
    private static routes;
    private static currentPath;
    private static rootRouter;
    private static lastRouteContent;
    private static registeredRouteList;
    private static registeredOutRoute;
    private static listenRouteCallbackMap;
    private static basePath;
    private static elements;
    private static resolvePath;
    static root: (element: UIElement) => void;
    static base: (path: string) => void;
    static route: (path: string, element: UIElement | UIBlend) => void;
    static navigate: (path: string) => void;
    static back: () => void;
    static forward: () => void;
    static outRoute: (element: UIElement | UIBlend) => void;
    static listenRoute: (path: string, callback: () => void) => void;
    private static check;
    static init: () => void;
}
