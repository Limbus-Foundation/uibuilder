
// UI RENDER :

import { UIBlend } from "../ui-blend/ui-blend.js";
import { UIElement } from "../ui-element/ui-element.js";

export type UIRenderOrganization = "above" | "below";

export class UIRender {

    constructor(parent: HTMLElement, children: UIElement | UIBlend, organization: UIRenderOrganization) {

        if (children instanceof UIBlend) {

            for (const element of children) {
                organization === "above" ? parent.prepend(element.__get()) : parent.appendChild(element.__get());
                element.__invokeListenRender();
            };

            return;
        };

        organization === "above" ? parent.prepend(children.__get()): parent.appendChild(children.__get());

        children.__invokeListenRender();
    };
};