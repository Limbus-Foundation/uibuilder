// UI STORE :

interface ISector {
    name : string;
    data : { name: string; value: any }[]
};

export class UIStore {

    private static storeSector : ISector[] = [];
    private static changeListeners : ((sectorName: string, dataName: string, dataValue: any, compare: (dataName: string, dataValue?: any) => boolean) => void)[] = [];

    public static listenSector = (sectorName: string, callback: (sectorName: string, dataName: string, dataValue: any, compare: (dataName: string, dataValue?: any) => boolean) => void): void => {
        UIStore.changeListeners.push((changedSector, dataName, dataValue, compare) => {
            if(changedSector === sectorName) callback(changedSector, dataName, dataValue, compare);
        });
    };

    public static sector = (sectorName: string): void => {
        UIStore.storeSector.push({
            name : sectorName,
            data : []
        });
    };

    public static get = <T>(sectorName: string, dataName: string): T | undefined => {

        const sectorFound = UIStore.storeSector.find(sector => sector.name === sectorName);

        if(sectorFound === undefined) return;

        const sectorDataIndex = sectorFound.data.findIndex(data => data.name === dataName);

        if(sectorDataIndex !== -1) return sectorFound.data[sectorDataIndex].value as T;
    };

    public static set = (sectorName: string, dataName: string, dataValue: any): void => {

        const sectorFound = UIStore.storeSector.find(sector => sector.name === sectorName);

        if(sectorFound === undefined) return;

        const sectorData = sectorFound.data.find(data => data.name === dataName);

        if(sectorData) {
            sectorData.value = dataValue;
        } else {
            sectorFound.data.push({
                name: dataName,
                value: dataValue
            });
        }

        UIStore.changeListeners.forEach(callback => callback(
            sectorName,
            dataName,
            dataValue,
            (compareKey, compareValue) => dataName === compareKey && (compareValue === undefined || dataValue === compareValue)
        ));
    };

};