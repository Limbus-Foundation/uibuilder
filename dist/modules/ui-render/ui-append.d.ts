import { UIBlend } from "../ui-blend/ui-blend.js";
import { UIElement } from "../ui-element/ui-element.js";
export type UIAppendOrganization = "above" | "below";
export declare class UIAppend {
    constructor(parent: HTMLElement, children: UIElement | UIBlend, organization: UIAppendOrganization);
}
