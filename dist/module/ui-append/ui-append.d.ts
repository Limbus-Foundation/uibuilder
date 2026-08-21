import { UIBlend } from "../ui-blend/ui-blend.js";
import { UIElement } from "../ui-element/ui-element.js";
type UIAppendOrganization = "START" | "END";
export declare class UIAppend {
    constructor(parent: HTMLElement, children: UIElement | UIBlend, organization: UIAppendOrganization);
}
export {};
