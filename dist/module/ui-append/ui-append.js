// UI APPEND : 
import { UIBlend } from "../ui-blend/ui-blend.js";
export class UIAppend {
    constructor(parent, children, organization) {
        if (children instanceof UIBlend) {
            for (const element of children)
                organization === "START" ? parent.appendChild(element.get()) : parent.prepend(element.get());
            return;
        }
        ;
        organization === "START" ? parent.appendChild(children.get()) : parent.prepend(children.get());
    }
    ;
}
;
//# sourceMappingURL=ui-append.js.map