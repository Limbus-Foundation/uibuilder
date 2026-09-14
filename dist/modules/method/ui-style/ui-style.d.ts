export type UIStyleProperties = {
    [K in keyof CSSStyleDeclaration]?: CSSStyleDeclaration[K];
};
export declare class UIStyle {
    readonly properties: UIStyleProperties;
    constructor(properties: UIStyleProperties);
}
