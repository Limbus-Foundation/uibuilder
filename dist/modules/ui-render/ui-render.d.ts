import { UIBlend } from "../ui-blend/ui-blend.js";
import { UIElement } from "../ui-element/ui-element.js";
export type UIRenderOrganization = "above" | "below";
export declare class UIRender {
    constructor(parent: HTMLElement, children: UIElement | UIBlend, organization: UIRenderOrganization);
}
