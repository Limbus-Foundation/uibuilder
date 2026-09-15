// UI STORE :
;
export class UIStore {
    static storeSector = [];
    static changeListeners = [];
    static listenSector = (sectorName, callback) => {
        UIStore.changeListeners.push((changedSector, dataName, dataValue, compare) => {
            if (changedSector === sectorName)
                callback(changedSector, dataName, dataValue, compare);
        });
    };
    static sector = (sectorName) => {
        UIStore.storeSector.push({
            name: sectorName,
            data: []
        });
    };
    static get = (sectorName, dataName) => {
        const sectorFound = UIStore.storeSector.find(sector => sector.name === sectorName);
        if (sectorFound === undefined)
            return;
        const sectorDataIndex = sectorFound.data.findIndex(data => data.name === dataName);
        if (sectorDataIndex !== -1)
            return sectorFound.data[sectorDataIndex].value;
    };
    static set = (sectorName, dataName, dataValue) => {
        const sectorFound = UIStore.storeSector.find(sector => sector.name === sectorName);
        if (sectorFound === undefined)
            return;
        const sectorData = sectorFound.data.find(data => data.name === dataName);
        if (sectorData) {
            sectorData.value = dataValue;
        }
        else {
            sectorFound.data.push({
                name: dataName,
                value: dataValue
            });
        }
        UIStore.changeListeners.forEach(callback => callback(sectorName, dataName, dataValue, (compareKey, compareValue) => dataName === compareKey && (compareValue === undefined || dataValue === compareValue)));
    };
}
;
//# sourceMappingURL=ui-store.js.map