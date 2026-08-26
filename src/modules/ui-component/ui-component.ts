// UI COMPONENT :

export class UIComponent {

    public static build<T, P extends any[]>(build: (...props: P) => T): (...props: Partial<P>) => T {
        return (...props) => build(...props as P);
    }

}