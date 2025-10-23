export default class ExponentialMovingAverage {
    constructor(oneYearOfDataIn: any, numberOfDaystoLookBackIn: any);
    oneYearOfData: any;
    numberOfDaystoLookBack: any;
    generateTheAverages(accumulatedChartDataIn: any): StandardChartData[];
    accumulatedChartData: any;
    generateTheDataPointsFormTwo_UpToDate(howManyDaysInAverage: any, eodResponseInfo: any): any[];
    generateOneDataPoint(startAddress: any, numberOfDaystoLookBack: any, eodResponseInfo: any): number;
    generateExponentialDataPointFormTwo(currentAddressToEvaluate: any, lengthOfAverage: any, previousDataPoint: any, eodResponseInfo: any): any;
    generateTheUnrestrictedAverages(): any[];
    toString(): string;
}
import StandardChartData from './StandardChartData.jsx';
