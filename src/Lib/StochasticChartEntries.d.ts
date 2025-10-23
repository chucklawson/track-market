export default class StochasticChartEntries {
    constructor(standardValuesIn: any, fullYearOfDataValuesIn: any, slowInidcatorDaysToLookBackIn: any, fastInidcatorDaysToLookBackIn: any);
    standardValues: any;
    fullYearOfDataValues: any;
    slowInidcatorDaysToLookBack: any;
    fastInidcatorDaysToLookBack: any;
    generateStochasticValues(): any[];
    loadChartData(fastStochasticValues: any, slowStochasticValues: any): any[];
    generateSlowStochasticValues(fastStochasticValues: any, numberOfDaysToLookBack: any): {
        stochasticValue: number;
        dateOfClose: any;
    }[];
    generateTheDataPointsSimpleMovingAverage(numberOfDaystoLookBack: any, dataPontsToEvaluate: any): {
        stochasticValue: number;
        dateOfClose: any;
    }[];
    generateOneDataPoint(startAddress: any, numberOfDaystoLookBack: any, dataPontsToEvaluate: any): number;
    generateFastStochasticValues(numberOfDaysToLookBack: any): {}[];
    calculateStochistic(lowTradingPrice: any, highTradingPrice: any, lastClosingPrice: any): number;
    obtainLowTradingPrice(dataToEvaluate: any): number;
    obtainHignTradingPrice(dataToEvaluate: any): number;
    colllectSubsetOfDateToEvaluate(endAddress: any, numberOfDaysToLookBack: any, dataToEvaluate: any): any[];
    findStartAddressBasedOnDate(dataToEvaluate: any, dateToFind: any): number;
}
