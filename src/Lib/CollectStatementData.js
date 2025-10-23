"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadStatmentMetricsData = loadStatmentMetricsData;
exports.buildRowTitles = buildRowTitles;
exports.buildColumnTitlesByPeriod = buildColumnTitlesByPeriod;
exports.buildDataToShow = buildDataToShow;
var StatementAnalysisKeyMetricsData_jsx_1 = require("./StatementAnalysisKeyMetricsData.jsx");
function loadStatmentMetricsData(statmentAnalysisKeyMetrics) {
    var statementData = [];
    if ((statmentAnalysisKeyMetrics != null) && (statmentAnalysisKeyMetrics.length !== undefined)) {
        for (var i = 0; i < statmentAnalysisKeyMetrics.length; ++i) {
            var statementAnalysisKeyMetricsData = new StatementAnalysisKeyMetricsData_jsx_1.default(statmentAnalysisKeyMetrics[i]);
            statementData.push(statementAnalysisKeyMetricsData);
        }
    }
    return statementData;
}
function buildRowTitles(statementData) {
    var rows = [];
    var statementAnalysisKeyMetricsData = statementData[0];
    rows = setRowTitle(rows, "priceToEarnings");
    //rows = setRowTitle(rows,"symbol")
    rows = setRowTitle(rows, "date");
    //rows = setRowTitle(rows,"period")
    //rows = setRowTitle(rows,"calendarYear")
    rows = setRowTitle(rows, "revenuePerShare");
    rows = setRowTitle(rows, "netIncomePerShare");
    rows = setRowTitle(rows, "operatingCashFlowPerShare");
    rows = setRowTitle(rows, "freeCashFlowPerShare");
    rows = setRowTitle(rows, "cashPerShare");
    rows = setRowTitle(rows, "bookValuePerShare");
    rows = setRowTitle(rows, "tangibleBookValuePerShare");
    rows = setRowTitle(rows, "shareholdersEquityPerShare");
    rows = setRowTitle(rows, "interestDebtPerShare");
    rows = setRowTitle(rows, "marketCap");
    rows = setRowTitle(rows, "enterpriseValue");
    rows = setRowTitle(rows, "peRatio");
    rows = setRowTitle(rows, "priceToSalesRatio");
    rows = setRowTitle(rows, "pocfratio");
    rows = setRowTitle(rows, "pfcfRatio");
    rows = setRowTitle(rows, "pbRatio");
    rows = setRowTitle(rows, "ptbRatio");
    rows = setRowTitle(rows, "evToSales");
    rows = setRowTitle(rows, "evToFreeCashFlow");
    rows = setRowTitle(rows, "enterpriseValueOverEBITDA");
    rows = setRowTitle(rows, "evToOperatingCashFlow");
    rows = setRowTitle(rows, "earningsYield");
    rows = setRowTitle(rows, "freeCashFlowYield");
    rows = setRowTitle(rows, "debtToEquity");
    rows = setRowTitle(rows, "debtToAssets");
    rows = setRowTitle(rows, "debtToMarketCap");
    rows = setRowTitle(rows, "netDebtToEBITDA");
    rows = setRowTitle(rows, "currentRatio");
    rows = setRowTitle(rows, "interestCoverage");
    rows = setRowTitle(rows, "incomeQuality");
    rows = setRowTitle(rows, "dividendPerShare");
    rows = setRowTitle(rows, "dividendYield");
    rows = setRowTitle(rows, "dividendYieldPercentage");
    rows = setRowTitle(rows, "payoutRatio");
    rows = setRowTitle(rows, "salesGeneralAndAdministrativeToRevenue");
    rows = setRowTitle(rows, "researchAndDevelopementToRevenue");
    rows = setRowTitle(rows, "intangiblesToTotalAssets");
    rows = setRowTitle(rows, "capexToOperatingCashFlow");
    rows = setRowTitle(rows, "capexToRevenue");
    rows = setRowTitle(rows, "capexToDepreciation");
    rows = setRowTitle(rows, "stockBasedCompensationToRevenue");
    rows = setRowTitle(rows, "grahamNumber");
    rows = setRowTitle(rows, "roic");
    rows = setRowTitle(rows, "returnOnTangibleAssets");
    rows = setRowTitle(rows, "grahamNetNet");
    rows = setRowTitle(rows, "workingCapital");
    rows = setRowTitle(rows, "tangibleAssetValue");
    rows = setRowTitle(rows, "netCurrentAssetValue");
    rows = setRowTitle(rows, "investedCapital");
    rows = setRowTitle(rows, "averageReceivables");
    rows = setRowTitle(rows, "averagePayables");
    rows = setRowTitle(rows, "averageInventory");
    rows = setRowTitle(rows, "daysSalesOutstanding");
    rows = setRowTitle(rows, "daysPayablesOutstanding");
    rows = setRowTitle(rows, "daysOfInventoryOnHand");
    rows = setRowTitle(rows, "receivablesTurnover");
    rows = setRowTitle(rows, "payablesTurnover");
    rows = setRowTitle(rows, "inventoryTurnover");
    rows = setRowTitle(rows, "capexPerShare");
    rows = setRowTitle(rows, "updatedAt");
    rows = setRowTitle(rows, "createdAt");
    rows = setRowTitle(rows, "xAxisDataKey");
    rows = setRowTitle(rows, "priceToEarnings");
    return rows;
}
function setRowTitle(rows, titleToUse) {
    rows.push(titleToUse);
    return rows;
}
function buildColumnTitlesByPeriod(statementData, maxPeriodsIn) {
    var colTitles = [];
    var maxPeriods = maxPeriodsIn;
    if (statementData.length < maxPeriods) {
        maxPeriods = statementData.length;
    }
    for (var i = 0; i < maxPeriods; ++i) {
        var aColumnTitle = statementData[i].xAxisDataKey;
        colTitles.push(aColumnTitle);
    }
    colTitles.push('Average');
    return colTitles;
}
function buildDataToShow(statementData, periodsToUseIn) {
    var periodsToUse = periodsToUseIn;
    if (statementData.length < periodsToUse) {
        periodsToUse = statementData.length;
    }
    var rows = [];
    var row = [];
    var accumulatedValue = Number(0.0);
    var averageValue = 0.0;
    row = [];
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].priceToEarnings);
        var tempValue = Number(statementData[i].priceToEarnings);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    /*
    for(let i=0;i<periodsToUse;++i)
    {
        row = addOneRowElement(row,statementData[i].symbol)
    }
    rows.push(row)
    */
    row = [];
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].date);
    }
    rows.push(row);
    /*
    row = [];
    for(let i=0;i<periodsToUse;++i)
    {
        row = addOneRowElement(row,statementData[i].period)
    }
    rows.push(row)

    row = [];
    for(let i=0;i<periodsToUse;++i)
    {
        row = addOneRowElement(row,statementData[i].calendarYear)
    }
    rows.push(row)
    */
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].revenuePerShare);
        var tempValue = Number(statementData[i].revenuePerShare);
        accumulatedValue += tempValue;
    }
    //console.log('accumulatedValue:' + accumulatedValue)
    averageValue = (accumulatedValue / periodsToUse);
    //console.log('averageValue:' + averageValue)
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].netIncomePerShare);
        var tempValue = Number(statementData[i].netIncomePerShare);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].operatingCashFlowPerShare);
        var tempValue = Number(statementData[i].operatingCashFlowPerShare);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].freeCashFlowPerShare);
        var tempValue = Number(statementData[i].freeCashFlowPerShare);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].cashPerShare);
        var tempValue = Number(statementData[i].cashPerShare);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].bookValuePerShare);
        var tempValue = Number(statementData[i].bookValuePerShare);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].tangibleBookValuePerShare);
        var tempValue = Number(statementData[i].tangibleBookValuePerShare);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].shareholdersEquityPerShare);
        var tempValue = Number(statementData[i].shareholdersEquityPerShare);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].interestDebtPerShare);
        var tempValue = Number(statementData[i].interestDebtPerShare);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].marketCap);
        //let tempValue=Number(statementData[i].foo);
        //accumulatedValue+=tempValue;
    }
    //averageValue=(accumulatedValue/periodsToUse);
    //row=addOneRowElement(row,averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].enterpriseValue);
    }
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].peRatio);
        var tempValue = Number(statementData[i].peRatio);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].priceToSalesRatio);
        var tempValue = Number(statementData[i].priceToSalesRatio);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].pocfratio);
        var tempValue = Number(statementData[i].pocfratio);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].pfcfRatio);
        var tempValue = Number(statementData[i].pfcfRatio);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].pbRatio);
        var tempValue = Number(statementData[i].pbRatio);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].ptbRatio);
        var tempValue = Number(statementData[i].ptbRatio);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].evToSales);
        var tempValue = Number(statementData[i].evToSales);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].evToFreeCashFlow);
        var tempValue = Number(statementData[i].evToFreeCashFlow);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].enterpriseValueOverEBITDA);
        var tempValue = Number(statementData[i].enterpriseValueOverEBITDA);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].evToOperatingCashFlow);
        var tempValue = Number(statementData[i].evToOperatingCashFlow);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].earningsYield);
        var tempValue = Number(statementData[i].earningsYield);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].freeCashFlowYield);
        var tempValue = Number(statementData[i].freeCashFlowYield);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].debtToEquity);
        var tempValue = Number(statementData[i].debtToEquity);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].debtToAssets);
        var tempValue = Number(statementData[i].debtToAssets);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].debtToMarketCap);
    }
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].netDebtToEBITDA);
        var tempValue = Number(statementData[i].netDebtToEBITDA);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].currentRatio);
        var tempValue = Number(statementData[i].currentRatio);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].interestCoverage);
        var tempValue = Number(statementData[i].interestCoverage);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].incomeQuality);
        var tempValue = Number(statementData[i].incomeQuality);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].dividendPerShare);
    }
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].dividendYield);
        var tempValue = Number(statementData[i].dividendYield);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].dividendYieldPercentage);
    }
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].payoutRatio);
        var tempValue = Number(statementData[i].payoutRatio);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].salesGeneralAndAdministrativeToRevenue);
        var tempValue = Number(statementData[i].salesGeneralAndAdministrativeToRevenue);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        /*
        if(statementData[i].researchAndDevelopementToRevenue !== undefined)
        {
            row = addOneRowElement(row,statementData[i].researchAndDevelopementToRevenue)
        }
        else
        {
            */
        row = addOneRowElement(row, statementData[i].researchAndDevelopementToRevenue);
        //}
    }
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].intangiblesToTotalAssets);
        var tempValue = Number(statementData[i].intangiblesToTotalAssets);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].capexToOperatingCashFlow);
        var tempValue = Number(statementData[i].capexToOperatingCashFlow);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].capexToRevenue);
        var tempValue = Number(statementData[i].capexToRevenue);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].capexToDepreciation);
        var tempValue = Number(statementData[i].capexToDepreciation);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].stockBasedCompensationToRevenue);
        var tempValue = Number(statementData[i].stockBasedCompensationToRevenue);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].grahamNumber);
        var tempValue = Number(statementData[i].grahamNumber);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].roic);
        var tempValue = Number(statementData[i].roic);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].returnOnTangibleAssets);
        var tempValue = Number(statementData[i].returnOnTangibleAssets);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].grahamNetNet);
        var tempValue = Number(statementData[i].grahamNetNet);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].workingCapital);
        var tempValue = Number(statementData[i].workingCapital);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].tangibleAssetValue);
        var tempValue = Number(statementData[i].tangibleAssetValue);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].netCurrentAssetValue);
        var tempValue = Number(statementData[i].netCurrentAssetValue);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].investedCapital);
        var tempValue = Number(statementData[i].investedCapital);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].averageReceivables);
        var tempValue = Number(statementData[i].averageReceivables);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].averagePayables);
        var tempValue = Number(statementData[i].averagePayables);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].averageInventory);
        var tempValue = Number(statementData[i].averageInventory);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].daysSalesOutstanding);
        var tempValue = Number(statementData[i].daysSalesOutstanding);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].daysPayablesOutstanding);
        var tempValue = Number(statementData[i].daysPayablesOutstanding);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].daysOfInventoryOnHand);
        var tempValue = Number(statementData[i].daysOfInventoryOnHand);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].receivablesTurnover);
        var tempValue = Number(statementData[i].receivablesTurnover);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].payablesTurnover);
        var tempValue = Number(statementData[i].payablesTurnover);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].inventoryTurnover);
        var tempValue = Number(statementData[i].inventoryTurnover);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].capexPerShare);
        var tempValue = Number(statementData[i].capexPerShare);
        accumulatedValue += tempValue;
    }
    averageValue = (accumulatedValue / periodsToUse);
    row = addOneRowElement(row, averageValue);
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].updatedAt);
    }
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].createdAt);
    }
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].xAxisDataKey);
    }
    rows.push(row);
    row = [];
    accumulatedValue = 0.0;
    for (var i = 0; i < periodsToUse; ++i) {
        row = addOneRowElement(row, statementData[i].priceToEarnings);
    }
    rows.push(row);
    return rows;
}
function addOneRowElement(row, element) {
    if ((typeof element === 'number') && (Number.isInteger(element) == false)) {
        row.push({ value: element.toFixed(4) });
    }
    else {
        row.push({ value: element });
    }
    return row;
}
