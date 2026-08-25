// UI APPEND : 
import { UIBlend } from "../ui-blend/ui-blend.js";
export class UIAppend {
    constructor(parent, children, organization) {
        if (children instanceof UIBlend) {
            for (const element of children)
                organization === "START" ? parent.prepend(element.get()) : parent.appendChild(element.get());
            return;
        }
        ;
        organization === "START" ? parent.prepend(children.get()) : parent.appendChild(children.get());
    }
    ;
}
;
//# sourceMappingURL=ui-append.js.map