import { UIElement } from "../ui-element/ui-element.js";
import { UIBlend } from "../ui-blend/ui-blend.js";
export declare class UIRouter {
    private static routes;
    private static currentPath;
    private static elements;
    static route: (path: string, element: UIElement | UIBlend) => void;
    static navigate: (path: string) => void;
    static back: () => void;
    static forward: () => void;
    static check: () => void;
    static init: () => void;
}
