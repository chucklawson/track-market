export default class StandardMovingAverage {
    constructor(oneYearOfDataIn: any, numberOfDaystoLookBackIn: any);
    oneYearOfData: any;
    numberOfDaystoLookBack: any;
    generateTheAverages(accumulatedChartDataIn: any): StandardChartData[];
    accumulatedChartData: any;
    generateTheDataPointsSimpleMovingAverage(numberOfDaystoLookBack: any, eodResponseInfo: any): any[];
    generateOneDataPoint(startAddress: any, numberOfDaystoLookBack: any, eodResponseInfo: any): number;
    generateTheUnrestrictedAverages(): any[];
    toString(): string;
}
import StandardChartData from './StandardChartData.jsx';
