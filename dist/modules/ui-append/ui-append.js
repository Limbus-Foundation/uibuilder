// UI APPEND :
import { UIBlend } from "../ui-blend/ui-blend.js";
export class UIAppend {
    constructor(parent, children, organization) {
        if (children instanceof UIBlend) {
            for (const element of children) {
                organization === "above" ? parent.prepend(element.__get()) : parent.appendChild(element.__get());
                element.__invokeRenderListen();
            }
            ;
            return;
        }
        ;
        organization === "above" ? parent.prepend(children.__get()) : parent.appendChild(children.__get());
        children.__invokeRenderListen();
    }
    ;
}
;
//# sourceMappingURL=ui-append.js.map