export default class BollingerBands {
    constructor(standardValuesIn: any, adjustedToContainFullYearOfDataValuesIn: any, numberOfDaysToLookBackIn: any);
    standardValues: any;
    adjustedToContainFullYearOfDataValues: any;
    numberOfDaysToLookBack: any;
    mean: number;
    generateBollingerBands(): any[];
    generateOneSetOfDataPoints(dataToEvaluate: any): number;
    generateMean(dataToEvaluate: any): number;
    calculateStdDeviation(meanIn: any, dataToEvaluate: any): number;
    colllectSubsetOfDateToEvaluate(endAddress: any, dataToEvaluate: any): any[];
    findStartAddressBasedOnDate(dataToEvaluate: any, dateToFind: any): number;
    buildStandardChartDataFromEndPointData(endPointDataToConvert: any): DataPoint[];
}
import DataPoint from './DataPoint.jsx';
