export declare class UIStore {
    private static storeSector;
    private static changeListeners;
    static listenSector: (sectorName: string, callback: (sectorName: string, dataName: string, dataValue: any, compare: (dataName: string, dataValue?: any) => boolean) => void) => void;
    static sector: (sectorName: string) => void;
    static get: <T>(sectorName: string, dataName: string) => T | undefined;
    static set: (sectorName: string, dataName: string, dataValue: any) => void;
}
