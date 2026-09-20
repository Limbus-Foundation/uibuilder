



import { UIBuilder } from "../dist/ui-builder.js";


const frombridge = UIBuilder.label({ content: "Hello World" });

frombridge.style({ color : "blue"})

export const br = UIBuilder.bridge({ frombridge });
