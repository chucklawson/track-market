export default class RSIChartEntries {
    constructor(standardValuesIn: any, fullYearOfDataValuesIn: any, numberOfDaysToLookBackIn: any);
    standardValues: any;
    fullYearOfDataValues: any;
    numberOfDaysToLookBack: any;
    generateRsiValues(): RSIChartData[];
    generateASucessiveRSIvalue(lastRSIChartValue: any, dataToEavaluate: any, numberOfDaysToLookBack: any): RSIChartData;
    generateFirstRSIvalue(dataToEvaluate: any, lastClose: any): 0 | RSIChartData;
    calculateMeanForUpwardMovements(dataToEvaluate: any, lastClose: any): number;
    calculateMeanForDownwardMovements(dataToEvaluate: any, lastClose: any): number;
    colllectSubsetOfDateToEvaluate(endAddress: any, dataToEvaluate: any): any[];
    findStartAddressBasedOnDate(dataToEvaluate: any, dateToFind: any): number;
}
import RSIChartData from "./RSIChartData.jsx";
