
// UI APPEND : 

import { UIBlend } from "../ui-blend/ui-blend.js";
import { UIElement } from "../ui-element/ui-element.js";

type UIAppendOrganization = "START" | "END"

export class UIAppend {

    constructor(parent: HTMLElement, children: UIElement | UIBlend, organization : UIAppendOrganization) {

        if (children instanceof UIBlend) {
            for (const element of children) organization === "START" ? parent.prepend(element.get()) : parent.appendChild(element.get());
            return;
        };

        organization === "START" ? parent.prepend(children.get()) : parent.appendChild(children.get());
    };
};