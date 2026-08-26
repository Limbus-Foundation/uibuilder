
// UI COMPONENT : 

export class UIComponent {

    public static build<T>(build: () => T): T {
        return build();
    }

}