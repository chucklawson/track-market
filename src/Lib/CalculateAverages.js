"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dailyValues = dailyValues;
exports.bollingerBands = bollingerBands;
exports.getRsiChartData = getRsiChartData;
exports.getStochasticChartData = getStochasticChartData;
exports.getLwChartData = getLwChartData;
exports.getPriceToEarningsChartData = getPriceToEarningsChartData;
var StandardChartData_jsx_1 = require("./StandardChartData.jsx");
var StandardMovingAverage_jsx_1 = require("./StandardMovingAverage.jsx");
var ExponentialMovingAverage_jsx_1 = require("./ExponentialMovingAverage.jsx");
var BollingerBands_jsx_1 = require("./BollingerBands.jsx");
//import RSIChartData from './RSIChartData';
var RSIChartEntries_jsx_1 = require("./RSIChartEntries.jsx");
var LWChartEntries_jsx_1 = require("./LWChartEntries.jsx");
var StochasticChartEntries_jsx_1 = require("./StochasticChartEntries.jsx");
var StatementAnalysisKeyMetricsData_jsx_1 = require("./StatementAnalysisKeyMetricsData.jsx");
function dailyValues(standardValuesIn, adjustedToContainFullYearOfDataValuesIn) {
    //console.log("got into dailyValues: ")
    //console.log("valuesIn.length: " + standardValuesIn.length)
    //console.log("adjustedValuesIn.length: " + adjustedToContainFullYearOfDataValuesIn.length)
    if (standardValuesIn.length === undefined) {
        console.log("valuesIn.length === undefined");
        return null;
    }
    var accumulatedChartData = [];
    for (var i = 0; i < standardValuesIn.length; ++i) {
        var chartDataEntry = new StandardChartData_jsx_1.default(standardValuesIn[i].date, standardValuesIn[i].close, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
        //console.log("chartDataEntry using toString: " + chartDataEntry.toString())
        accumulatedChartData.push(chartDataEntry);
    }
    /*
    for(let j=0;j<accumulatedChartData.length;++j)
    {
        console.log('accumulatedChartData[ '+j + ' ]: '+ accumulatedChartData[j].toString())
    }
    */
    //console.log("accumulatedChartData.length: " + accumulatedChartData.length)
    // modified 083123 from 33 to 100, then back again
    var numberOfDaysToLookBack = 33;
    //console.log("calling StandardMovingAverage where numberOfDaysToLookBack: " + numberOfDaysToLookBack)
    var standardAverages = new StandardMovingAverage_jsx_1.default(adjustedToContainFullYearOfDataValuesIn, numberOfDaysToLookBack);
    accumulatedChartData = standardAverages.generateTheAverages(accumulatedChartData);
    //console.log("Got past accumulatedChartData")
    var numberOfDaysToLookBackExponentially = 10;
    var exponentialMovingAverages = new ExponentialMovingAverage_jsx_1.default(adjustedToContainFullYearOfDataValuesIn, numberOfDaysToLookBackExponentially);
    accumulatedChartData = exponentialMovingAverages.generateTheAverages(accumulatedChartData);
    numberOfDaysToLookBack = 200;
    if (numberOfDaysToLookBack >= standardValuesIn.length) {
        numberOfDaysToLookBack = standardValuesIn.length - 1;
    }
    //console.log('numberOfDaysToLookBack: '+ numberOfDaysToLookBack)
    var twoHundredDayChartData = [];
    var twoHundredDayMoveingAverage = new StandardMovingAverage_jsx_1.default(adjustedToContainFullYearOfDataValuesIn, numberOfDaysToLookBack);
    twoHundredDayChartData = twoHundredDayMoveingAverage.generateTheAverages(accumulatedChartData);
    //console.log('twoHundredDayChartData: '+ twoHundredDayChartData)
    for (var j = 0; j < accumulatedChartData.length; ++j) {
        accumulatedChartData[j].twoHundredDayMovingAverage = twoHundredDayChartData[j].simpleMovingAverage;
        //console.log('twoHundredDayMovingAverage Entry: ' + accumulatedChartData[j].twoHundredDayMovingAverage)
    }
    numberOfDaysToLookBack = 50;
    if (numberOfDaysToLookBack >= adjustedToContainFullYearOfDataValuesIn.length) {
        numberOfDaysToLookBack = standardValuesIn.length - 1;
    }
    var fiftyDayChartData = [];
    var fiftyDayMoveingAverage = new StandardMovingAverage_jsx_1.default(adjustedToContainFullYearOfDataValuesIn, numberOfDaysToLookBack);
    fiftyDayChartData = fiftyDayMoveingAverage.generateTheAverages(accumulatedChartData);
    //console.log('twoHundredDayChartData: '+ twoHundredDayChartData)
    for (var j = 0; j < accumulatedChartData.length; ++j) {
        accumulatedChartData[j].fiftyDayMovingAverage = fiftyDayChartData[j].simpleMovingAverage;
        //console.log('twoHundredDayMovingAverage Entry: ' + accumulatedChartData[j].twoHundredDayMovingAverage)
    }
    /*
    numberOfDaysToLookBack=200;
    let twoHundredDayMovingAverages = new StandardMovingAverage(adjustedToContainFullYearOfDataValuesIn,numberOfDaysToLookBack);
    accumulatedChartData=standardAverages.generateThetwoAverages(accumulatedChartData)
    */
    //console.log("standardAverages: " + standardAverages.toString())
    return accumulatedChartData;
}
// standardValuesIn are those from the rest endpoint for the time period selected
// adjustedToContainFullYearOfDataValuesIn are those from the rest endpoint for the time period selected + a year
// accumulatedChartDataIn contains the chart data excluding bollingerBands... so add them and give it back
function bollingerBands(standardValuesIn, adjustedToContainFullYearOfDataValuesIn, accumulatedChartDataIn) {
    if (standardValuesIn.length === undefined) {
        console.log("standardValuesIn.length === undefined");
        return null;
    }
    // if decide to use standard use numberOfDaysToLookBack and adjust witn BollingerBands
    // otherwise, current set to do Exponential calcualtions
    // Make the adjustment around line 32 marked with 'Adjust here' within BollingerBands.js
    //let numberOfDaysToLookBack=33;
    //let numberOfDaysToLookBackExponentially=10;
    var numberOfDaysToLookBackNoRounding = 20;
    var bollingerBands = new BollingerBands_jsx_1.default(standardValuesIn, adjustedToContainFullYearOfDataValuesIn, numberOfDaysToLookBackNoRounding);
    var bollingers = bollingerBands.generateBollingerBands();
    var adjustedChartData = [];
    for (var j = 0; j < accumulatedChartDataIn.length; ++j) {
        var adjustedChartDataEntry = new StandardChartData_jsx_1.default(accumulatedChartDataIn[j].dateOfClose, accumulatedChartDataIn[j].dailyClosingPrice, accumulatedChartDataIn[j].simpleMovingAverage, accumulatedChartDataIn[j].expMovingAverage, accumulatedChartDataIn[j].twoHundredDayMovingAverage, accumulatedChartDataIn[j].fiftyDayMovingAverage, bollingers[j].lowerBandValue, bollingers[j].upperBandValue, bollingers[j].mean);
        //console.log('adjustedChartDataEntry: ' + adjustedChartDataEntry.toString())
        adjustedChartData.push(adjustedChartDataEntry);
    }
    return adjustedChartData;
}
function getRsiChartData(standardValuesIn, adjustedToContainFullYearOfDataValuesIn) {
    var numberOfDaysToLookBack = 14;
    var rSIChartEntries = new RSIChartEntries_jsx_1.default(standardValuesIn, adjustedToContainFullYearOfDataValuesIn, numberOfDaysToLookBack);
    var tempRsiData = rSIChartEntries.generateRsiValues();
    return tempRsiData;
}
function getStochasticChartData(standardValuesIn, adjustedToContainFullYearOfDataValuesIn) {
    var slowInidcatorDaysToLookBack = 3;
    var fastInidcatorDaysToLookBack = 14;
    var stochasticChartEntries = new StochasticChartEntries_jsx_1.default(standardValuesIn, adjustedToContainFullYearOfDataValuesIn, slowInidcatorDaysToLookBack, fastInidcatorDaysToLookBack);
    var stochasticData = stochasticChartEntries.generateStochasticValues();
    //console.log('stochasticData from calculateAverages: ' + JSON.stringify(stochasticData))
    return stochasticData;
}
function getLwChartData(larryWilliams, startDate, endDate) {
    var lwChartEntries = new LWChartEntries_jsx_1.default(larryWilliams, startDate, endDate);
    var LWData = lwChartEntries.generateLWValues();
    //console.log("LWData:  " + LWData)
    return LWData;
}
function getPriceToEarningsChartData(statmentAnalysisKeyMetrics) {
    var priceToEquityData = [];
    var entriesToCollect = 8;
    if ((statmentAnalysisKeyMetrics != null) && (statmentAnalysisKeyMetrics.length !== undefined) && (statmentAnalysisKeyMetrics.length > entriesToCollect)) {
        for (var i = 0; i < entriesToCollect; ++i) {
            var statementAnalysisKeyMetricsData = new StatementAnalysisKeyMetricsData_jsx_1.default(statmentAnalysisKeyMetrics[i]);
            priceToEquityData.push(statementAnalysisKeyMetricsData);
        }
    }
    //console.log('priceToEquityData: ' + priceToEquityData)
    return priceToEquityData.reverse();
}
