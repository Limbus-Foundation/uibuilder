// UI APPEND :

import { UIBlend } from "../ui-blend/ui-blend.js";
import { UIElement } from "../ui-element/ui-element.js";

export type UIAppendOrganization = "above" | "below";

export class UIAppend {

    constructor(parent: HTMLElement, children: UIElement | UIBlend, organization: UIAppendOrganization) {

        if (children instanceof UIBlend) {

            for (const element of children) {

                organization === "above"
                    ? parent.prepend(element.get())
                    : parent.appendChild(element.get());

                element.__invokeRenderListen();
            };

            return;
        };

        organization === "above"
            ? parent.prepend(children.get())
            : parent.appendChild(children.get());

        children.__invokeRenderListen();
    };
};