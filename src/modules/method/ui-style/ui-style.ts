
// UI STYLE : 

export type UIStyleProperties = {
    [K in keyof CSSStyleDeclaration]?: CSSStyleDeclaration[K];
};

export class UIStyle {
    constructor(public readonly properties: UIStyleProperties) {}
};
