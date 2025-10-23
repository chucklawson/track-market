"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RSIChartData_jsx_1 = require("./RSIChartData.jsx");
var RSIChartEntries = /** @class */ (function () {
    function RSIChartEntries(standardValuesIn, fullYearOfDataValuesIn, numberOfDaysToLookBackIn) {
        this.standardValues = standardValuesIn;
        this.fullYearOfDataValues = fullYearOfDataValuesIn;
        this.numberOfDaysToLookBack = numberOfDaysToLookBackIn;
        //console.log("adjustedToContainFullYearOfDataValuesIn: "+ JSON.stringify(adjustedToContainFullYearOfDataValuesIn))
        //console.log("BollingerBands valuesIn.length: " + this.standardValues.length)
        //console.log("BollingerBands adjustedValues.length: " + this.adjustedToContainFullYearOfDataValues.length)
        //console.log("BollingerBands numberOfDaystoLookBack: " + this.numberOfDaystoLookBack)
    }
    RSIChartEntries.prototype.generateRsiValues = function () {
        //console.log("generateBollingerBands valuesIn.length: " + this.standardValues.length)
        //console.log("generateBollingerBands adjustedValues.length: " + this.adjustedToContainFullYearOfDataValues.length)        
        //console.log('Range: ' + this.standardValues[0].date + ', through: ' + this.standardValues[(this.standardValues.length-1)].date)
        if (this.standardValues.length === undefined) {
            console.log("valuesIn.length === undefined");
            return null;
        }
        var tempRSIData = [];
        //console.log('subsetOfData: ' + JSON.stringify(this.fullYearOfDataValues))
        var lastClose = this.fullYearOfDataValues[0].close;
        var firstRsiDataPoint = this.generateFirstRSIvalue(this.fullYearOfDataValues, lastClose);
        tempRSIData.push(firstRsiDataPoint);
        //console.log('firstRsiDataPoint as object within RSIData: ' + JSON.stringify(tempRSIData[(tempRSIData.length-1)]))
        /*
        for(let endAddress=((this.numberOfDaysToLookBack+1)), standardValuesAddress=0;
                             endAddress < (dataToEvaluate.length+1);
                             ++endAddress, ++standardValuesAddress)
        {
          let subsetOfData=this.colllectSubsetOfDateToEvaluate(endAddress,dataToEvaluate)
          //console.log('subsetOfData[(subsetOfData.length-1)].date: ' + subsetOfData[(subsetOfData.length-1)].date)
          
          let nextRSIValue=this.generateASucessiveRSIvalue(RSIData[(RSIData.length-1)].rsiValue,
          subsetOfData[(subsetOfData.length-1)],this.numberOfDaysToLookBack)
          RSIData.push(nextRSIValue)
          console.log('nextRSIValue: ' + nextRSIValue)
        }
        */
        //console.log('dataToEvaluate length:' + this.fullYearOfDataValues.length)
        //console.log(' dataToEvaluate[(dataToEvaluate.length-1)]: ' + JSON.stringify( dataToEvaluate[0]))
        // console.log('date this.fullYearOfDataValues last date:' +  this.fullYearOfDataValues[(this.fullYearOfDataValues.length-1)].date)
        for (var i = (this.numberOfDaysToLookBack + 1); i < this.fullYearOfDataValues.length; ++i) {
            //console.log('i: ' + i +'this.fullYearOfDataValues[i].date: ' + this.fullYearOfDataValues[i].date)
            //console.log('RSIData[(RSIData.length-1)].rsiValue: ' + RSIData[(RSIData.length-1)].rsiValue)
            var nextRSIValue = this.generateASucessiveRSIvalue(tempRSIData[(tempRSIData.length - 1)], this.fullYearOfDataValues[i], this.numberOfDaysToLookBack);
            tempRSIData.push(nextRSIValue);
            //console.log('nextRSIValue: ' + nextRSIValue)
        }
        //console.log('last RSIValue: ' + tempRSIData[(tempRSIData.length-1)])
        var refAddressToStartFrom = this.findStartAddressBasedOnDate(tempRSIData, this.standardValues[0].date);
        //console.log('refAddressToStartFrom: ' + refAddressToStartFrom + ', (tempRSIData.length-1):' + (tempRSIData.length-1))
        var RSIData = [];
        for (var i = refAddressToStartFrom; i < (tempRSIData.length); ++i) {
            var aRSIChartDataEntry = new RSIChartData_jsx_1.default(tempRSIData[i].dateOfClose, tempRSIData[i].close, tempRSIData[i].upwardMean, tempRSIData[i].downwardMean, tempRSIData[i].rsiValue);
            RSIData.push(aRSIChartDataEntry);
        }
        //console.log('RSIData: ' + JSON.stringify(RSIData))
        return RSIData;
    };
    RSIChartEntries.prototype.generateASucessiveRSIvalue = function (lastRSIChartValue, dataToEavaluate, numberOfDaysToLookBack) {
        //console.log('lastRSIChartValue: ' + JSON.stringify(lastRSIChartValue))
        //console.log('generateASucessiveRSIvalue dataToEavaluate: ' + JSON.stringify(dataToEavaluate))
        var meanMultiplier = parseFloat((numberOfDaysToLookBack - 1));
        //console.log('meanMultiplier: ' + meanMultiplier)
        var currentSummedUpwardMean = (lastRSIChartValue.upwardMean * meanMultiplier);
        var currentSummedDownardMean = (lastRSIChartValue.downwardMean * meanMultiplier);
        if (dataToEavaluate.close > lastRSIChartValue.close) {
            currentSummedUpwardMean += (dataToEavaluate.close - lastRSIChartValue.close);
        }
        var newUpwardMean = currentSummedUpwardMean / parseFloat(numberOfDaysToLookBack);
        if (dataToEavaluate.close < lastRSIChartValue.close) {
            currentSummedDownardMean += (lastRSIChartValue.close - dataToEavaluate.close);
        }
        var newDownwardMean = currentSummedDownardMean / parseFloat(numberOfDaysToLookBack);
        var RS = 0.0;
        if (newDownwardMean !== 0.0) {
            RS = (newUpwardMean / newDownwardMean);
        }
        var RSI = 100 - (100 / (1 + RS));
        var calculatedRSIChartDataEntry = new RSIChartData_jsx_1.default(dataToEavaluate.date, dataToEavaluate.close, newUpwardMean, newDownwardMean, RSI);
        //console.log('calculatedRSIChartDataEntry: ' + calculatedRSIChartDataEntry)
        return calculatedRSIChartDataEntry;
    };
    RSIChartEntries.prototype.generateFirstRSIvalue = function (dataToEvaluate, lastClose) {
        //console.log('dataToEvaluate.length: ' + dataToEvaluate.length + ', lastClose: ' + lastClose)
        if (dataToEvaluate.length < 1) {
            return 0.0;
        }
        var endAddress = (this.numberOfDaysToLookBack);
        //console.log('endAddress: ' + endAddress)
        var subsetOfData = this.colllectSubsetOfDateToEvaluate(endAddress, dataToEvaluate);
        //console.log('subsetOfData.length: ' + subsetOfData.length)
        var upwardMean = this.calculateMeanForUpwardMovements(subsetOfData, lastClose);
        var downwardMean = this.calculateMeanForDownwardMovements(subsetOfData, lastClose);
        //console.log('upwardMean: ' + upwardMean)
        //console.log('downwardMean: ' + downwardMean)
        var tempRsiValue = 0.0;
        if (downwardMean > 0.0) {
            tempRsiValue = (upwardMean / downwardMean);
        }
        var firstRsiValue = (100.0 - (100.0 / (1.0 + tempRsiValue)));
        //console.log("date of lastEntry: " + subsetOfData[(subsetOfData.length-1)].date)
        var aRSIChartDataValue = new RSIChartData_jsx_1.default(subsetOfData[(subsetOfData.length - 1)].date, subsetOfData[(subsetOfData.length - 1)].close, upwardMean, downwardMean, firstRsiValue);
        return aRSIChartDataValue;
    };
    RSIChartEntries.prototype.calculateMeanForUpwardMovements = function (dataToEvaluate, lastClose) {
        var total = 0.0;
        var meanCounter = parseFloat(dataToEvaluate.length);
        var currentRefClosingPrice = lastClose;
        for (var i = 0; i < dataToEvaluate.length; ++i) {
            if (dataToEvaluate[i].close > currentRefClosingPrice) {
                total += (dataToEvaluate[i].close - currentRefClosingPrice);
            }
            currentRefClosingPrice = dataToEvaluate[i].close;
        }
        if (meanCounter >= 1.0) {
            return (total / meanCounter);
        }
        else {
            return 0.0;
        }
    };
    RSIChartEntries.prototype.calculateMeanForDownwardMovements = function (dataToEvaluate, lastClose) {
        var total = 0.0;
        var meanCounter = parseFloat(dataToEvaluate.length);
        var currentRefClosingPrice = lastClose;
        for (var i = 0; i < dataToEvaluate.length; ++i) {
            if (dataToEvaluate[i].close < currentRefClosingPrice) {
                total += (currentRefClosingPrice - dataToEvaluate[i].close);
            }
            currentRefClosingPrice = dataToEvaluate[i].close;
        }
        if (meanCounter >= 1.0) {
            //console.log('meanCounter: ' + meanCounter)
            return (total / meanCounter);
        }
        else {
            return 0.0;
        }
    };
    RSIChartEntries.prototype.colllectSubsetOfDateToEvaluate = function (endAddress, dataToEvaluate) {
        var subSetOfData = [];
        //console.log('endAddress-this.numberOfDaysToLookBack: ' + (endAddress-this.numberOfDaysToLookBack))
        for (var i = (endAddress - this.numberOfDaysToLookBack); i < endAddress; ++i) {
            //console.log('i: ' + i)
            subSetOfData.push(dataToEvaluate[i]);
        }
        return subSetOfData;
    };
    RSIChartEntries.prototype.findStartAddressBasedOnDate = function (dataToEvaluate, dateToFind) {
        //console.log('dataToEvaluate: ' + JSON.stringify(dataToEvaluate))
        //console.log('dateToFind: ' + JSON.stringify(dateToFind))
        var address = -1;
        for (var i = 0; i < dataToEvaluate.length; ++i) {
            if (dataToEvaluate[i].dateOfClose === dateToFind) {
                //console.log('located ' + dateToFind + ' at address: ' + i + ' where the date is: ' + dataToEvaluate[i].date)
                address = i;
                break;
            }
        }
        return address;
    };
    return RSIChartEntries;
}());
exports.default = RSIChartEntries;
