"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadHistoricalMetricsData = loadHistoricalMetricsData;
exports.buildRowTitles = buildRowTitles;
exports.buildColumnTitles = buildColumnTitles;
exports.buildHstoricalDataToShow = buildHstoricalDataToShow;
exports.calculateYield = calculateYield;
var HistoricalDividendData_jsx_1 = require("./HistoricalDividendData.jsx");
function loadHistoricalMetricsData(dividendData) {
    var historicalDividendsData = [];
    if ((dividendData != null) && (dividendData.length !== undefined)) {
        for (var i = 0; i < dividendData.length; ++i) {
            var historicalDividendData = new HistoricalDividendData_jsx_1.default(dividendData[i]);
            historicalDividendsData.push(historicalDividendData);
        }
    }
    //console.log('historicalDividendsData.length' + historicalDividendsData.length)
    return historicalDividendsData;
}
function buildRowTitles(historicalData, periodsToShow) {
    var rows = [];
    //let statementAnalysisKeyMetricsData=statementData[0];
    for (var i = 0; i < periodsToShow; ++i) {
        rows = setRowTitle(rows, historicalData[i].label);
    }
    return rows;
}
function setRowTitle(rows, titleToUse) {
    rows.push(titleToUse);
    return rows;
}
function buildColumnTitles() {
    var colTitles = [];
    colTitles.push('Date');
    colTitles.push('Adj Dividend');
    colTitles.push('Dividend');
    colTitles.push('Record Date');
    colTitles.push('Payment Date');
    colTitles.push('Declaration Date');
    return colTitles;
}
function buildHstoricalDataToShow(historicalData, periodsToUse) {
    var rows = [];
    var row = [];
    for (var i = 0; i < periodsToUse; ++i) {
        row = [];
        row = addOneRowElement(row, historicalData[i].date);
        row = addOneRowElement(row, historicalData[i].adjDividend);
        row = addOneRowElement(row, historicalData[i].dividend);
        row = addOneRowElement(row, historicalData[i].recordDate);
        row = addOneRowElement(row, historicalData[i].paymentDate);
        row = addOneRowElement(row, historicalData[i].declarationDate);
        rows.push(row);
    }
    return rows;
}
function addOneRowElement(row, element) {
    if ((typeof element === 'number') && (Number.isInteger(element) == false)) {
        row.push({ value: element.toFixed(2) });
    }
    else {
        row.push({ value: element });
    }
    return row;
}
function calculateYield(historicalData, currentQuote) {
    var periodsInPreviousYear = calculatePeriodsInPreiousYear(historicalData);
    //console.log('periodsInPreviousYear: ' + periodsInPreviousYear)
    var dividendRate = parseFloat(periodsInPreviousYear * historicalData[0].dividend);
    //console.log('dividendRate: ' + dividendRate)
    //console.log("currentQuote: " + JSON.stringify(currentQuote));
    //console.log('currentPrice: ' + currentQuote.price)
    var price = parseFloat(currentQuote.price);
    var percentageYield = 0.0;
    if ((dividendRate > 0.0) && (price > 0.0)) {
        percentageYield = parseFloat((dividendRate / price) * 100.0).toFixed(2);
    }
    return percentageYield;
}
function calculatePeriodsInPreiousYear(historicalData) {
    var previousYear = (parseInt(historicalData[0].date.substring(0, 4)) - 1);
    //console.log('previousYear: ' + previousYear)
    var periodsInPreviousYear = 0;
    for (var i = 0; i < historicalData.length; ++i) {
        if (parseInt(historicalData[i].date.substring(0, 4)) === previousYear) {
            ++periodsInPreviousYear;
        }
    }
    return periodsInPreviousYear;
}
