"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StochasticChartData_jsx_1 = require("./StochasticChartData.jsx");
var StandardMovingAverage_jsx_1 = require("./StandardMovingAverage.jsx");
var DataPoint_jsx_1 = require("./DataPoint.jsx");
var StochasticChartEntries = /** @class */ (function () {
    function StochasticChartEntries(standardValuesIn, fullYearOfDataValuesIn, slowInidcatorDaysToLookBackIn, fastInidcatorDaysToLookBackIn) {
        this.standardValues = standardValuesIn;
        this.fullYearOfDataValues = fullYearOfDataValuesIn;
        this.slowInidcatorDaysToLookBack = slowInidcatorDaysToLookBackIn;
        this.fastInidcatorDaysToLookBack = fastInidcatorDaysToLookBackIn;
        //console.log("adjustedToContainFullYearOfDataValuesIn: "+ JSON.stringify(adjustedToContainFullYearOfDataValuesIn))
        //console.log("BollingerBands valuesIn.length: " + this.standardValues.length)
        //console.log("BollingerBands adjustedValues.length: " + this.adjustedToContainFullYearOfDataValues.length)
        //console.log("BollingerBands numberOfDaystoLookBack: " + this.numberOfDaystoLookBack)
    }
    StochasticChartEntries.prototype.generateStochasticValues = function () {
        var fastStochasticValues = this.generateFastStochasticValues(this.fastInidcatorDaysToLookBack);
        //console.log('fastStochasticValues: ' + JSON.stringify(fastStochasticValues))
        var slowStochasticValues = this.generateSlowStochasticValues(fastStochasticValues, this.slowInidcatorDaysToLookBack);
        var stochasticData = this.loadChartData(fastStochasticValues, slowStochasticValues);
        //console.log('slowStochasticValues: ' + JSON.stringify(slowStochasticValues))
        //let stochasticData=[]
        return stochasticData;
    };
    StochasticChartEntries.prototype.loadChartData = function (fastStochasticValues, slowStochasticValues) {
        var stochasticChartData = [];
        //console.log('fastStochasticValues: ' + JSON.stringify(fastStochasticValues))
        var startingAddressFastValues = this.findStartAddressBasedOnDate(fastStochasticValues, this.standardValues[0].date);
        //console.log('date to locate: ' + this.standardValues[0].date + ', Entries to search: ' + slowStochasticValues.length)
        //console.log('slowStochasticValues: ' + JSON.stringify(slowStochasticValues))
        var startingAddressSlowValues = this.findStartAddressBasedOnDate(slowStochasticValues, this.standardValues[0].date);
        //console.log('startingAddressFastValues: ' + startingAddressFastValues)
        //console.log('startingAddressSlowValues: ' + startingAddressSlowValues + ',total entries: ' + slowStochasticValues.length)
        for (var i = startingAddressFastValues, j = startingAddressSlowValues; i < fastStochasticValues.length; ++i, ++j) {
            var aStochasticChartDataEntry = new StochasticChartData_jsx_1.default(fastStochasticValues[i].dateOfClose, fastStochasticValues[i].stochasticValue, slowStochasticValues[j].stochasticValue);
            stochasticChartData.push(aStochasticChartDataEntry);
        }
        return stochasticChartData;
    };
    StochasticChartEntries.prototype.generateSlowStochasticValues = function (fastStochasticValues, numberOfDaysToLookBack) {
        var dataPontsToEvaluate = [];
        for (var i = 0; i < fastStochasticValues.length; ++i) {
            var aDataPointToEvaluate = {
                close: fastStochasticValues[i].stochasticValue,
                dateOfClose: fastStochasticValues[i].dateOfClose
            };
            dataPontsToEvaluate.push(aDataPointToEvaluate);
        }
        var movingAverage = this.generateTheDataPointsSimpleMovingAverage(numberOfDaysToLookBack, dataPontsToEvaluate);
        return movingAverage;
    };
    StochasticChartEntries.prototype.generateTheDataPointsSimpleMovingAverage = function (numberOfDaystoLookBack, dataPontsToEvaluate) {
        //console.log('dataPontsToEvaluate: ' + JSON.stringify(dataPontsToEvaluate))    
        //console.log('generateTheDataPointsSimpleMovingAverage eodResponseInfo.length: ' + eodResponseInfo.length + ', numberOfDaystoLookBack: ' + numberOfDaystoLookBack)
        if (dataPontsToEvaluate.length < numberOfDaystoLookBack) {
            console.log('Returning: dataPontsToEvaluate.length < numberOfDaystoLookBack');
            return null;
        }
        var dataPoints = [];
        // this generates an up to the date average
        for (var i = numberOfDaystoLookBack; i < dataPontsToEvaluate.length; ++i) {
            var tempDouble = this.generateOneDataPoint(i, numberOfDaystoLookBack, dataPontsToEvaluate);
            var slowStochasticEntry = {
                stochasticValue: tempDouble,
                dateOfClose: dataPontsToEvaluate[i].dateOfClose
            };
            //let aDataPoint = new StochasticChartData(dataPontsToEvaluate[i].dateOfClose, 0.0,tempDouble);
            dataPoints.push(slowStochasticEntry);
        }
        //console.log('dataPoints.length: ' + dataPoints.length)
        return dataPoints;
    };
    // this geneates a simple moving average value for one datapoint
    StochasticChartEntries.prototype.generateOneDataPoint = function (startAddress, numberOfDaystoLookBack, dataPontsToEvaluate) {
        //console.log('generateOneDataPoint eodResponseInfo.Length: ' + eodResponseInfo.Length + ', numberOfDaystoLookBack: ' + numberOfDaystoLookBack + ', startAddress: '+startAddress)
        if (numberOfDaystoLookBack <= 0) {
            console.log('Returning: numberOfDaystoLookBack <= 0');
            return 0.0;
        }
        if (startAddress < numberOfDaystoLookBack) {
            console.log('Returning: startAddress < numberOfDaystoLookBack');
            return 0.0;
        }
        //let theSizeOfTheVector = eodResponseInfo.Length;
        // collect values up to the day you are evaluating
        var summedCloses = 0.0;
        for (var i = startAddress + 1 - numberOfDaystoLookBack; i < startAddress + 1; ++i) {
            summedCloses += parseFloat(dataPontsToEvaluate[i].close);
        }
        var devisor = numberOfDaystoLookBack;
        return summedCloses / devisor;
    };
    StochasticChartEntries.prototype.generateFastStochasticValues = function (numberOfDaysToLookBack) {
        //console.log("generateBollingerBands valuesIn.length: " + this.standardValues.length)
        //console.log("generateBollingerBands adjustedValues.length: " + this.adjustedToContainFullYearOfDataValues.length)        
        //console.log('Range: ' + this.standardValues[0].date + ', through: ' + this.standardValues[(this.standardValues.length-1)].date)
        var fastStochasticData = [{}];
        if (this.standardValues.length === undefined) {
            console.log("valuesIn.length === undefined");
            return null;
        }
        //console.log('this.fullYearOfDataValues[0]:' + JSON.stringify(this.fullYearOfDataValues[0]))
        for (var i = 0, endAddress = numberOfDaysToLookBack; i < ((this.fullYearOfDataValues.length - numberOfDaysToLookBack) + 1); ++i, ++endAddress) {
            var dataToEvaluate = this.colllectSubsetOfDateToEvaluate(endAddress, numberOfDaysToLookBack, this.fullYearOfDataValues);
            //console.log('dataToEvaluate: ' + dataToEvaluate[(dataToEvaluate.length-1)].date)
            var lowTradingPrice = this.obtainLowTradingPrice(dataToEvaluate);
            var highTradingPrice = this.obtainHignTradingPrice(dataToEvaluate);
            var lastClosingPrice = dataToEvaluate[(dataToEvaluate.length - 1)].close;
            var stochisticValue = this.calculateStochistic(lowTradingPrice, highTradingPrice, lastClosingPrice);
            var fastStochasticEntry = {
                stochasticValue: stochisticValue,
                dateOfClose: dataToEvaluate[(dataToEvaluate.length - 1)].date
            };
            //console.log( 'lowTradingPrice: ' + lowTradingPrice + ', highTradingPrice: ' + highTradingPrice + ', lastClosingPrice: ' + lastClosingPrice)
            //console.log( 'stochisticValue: ' + stochisticValue)
            fastStochasticData.push(fastStochasticEntry);
        }
        //console.log('RSIData: ' + JSON.stringify(RSIData))
        return fastStochasticData;
    };
    StochasticChartEntries.prototype.calculateStochistic = function (lowTradingPrice, highTradingPrice, lastClosingPrice) {
        if ((highTradingPrice - lowTradingPrice) === 0.0) {
            return 0.0;
        }
        var stochistic = (((lastClosingPrice - lowTradingPrice) / (highTradingPrice - lowTradingPrice)) * 100.0);
        return stochistic;
    };
    StochasticChartEntries.prototype.obtainLowTradingPrice = function (dataToEvaluate) {
        var lowTradingPrice = 10000000000.0;
        for (var i = 0; i < dataToEvaluate.length; ++i) {
            if (dataToEvaluate[i].low < lowTradingPrice) {
                lowTradingPrice = dataToEvaluate[i].low;
            }
        }
        return lowTradingPrice;
    };
    StochasticChartEntries.prototype.obtainHignTradingPrice = function (dataToEvaluate) {
        var highTradingPrice = -1.0;
        for (var i = 0; i < dataToEvaluate.length; ++i) {
            if (dataToEvaluate[i].high > highTradingPrice) {
                highTradingPrice = dataToEvaluate[i].high;
            }
        }
        return highTradingPrice;
    };
    StochasticChartEntries.prototype.colllectSubsetOfDateToEvaluate = function (endAddress, numberOfDaysToLookBack, dataToEvaluate) {
        var subSetOfData = [];
        //console.log('endAddress-this.numberOfDaysToLookBack: ' + (endAddress-this.numberOfDaysToLookBack))
        for (var i = (endAddress - numberOfDaysToLookBack); i < endAddress; ++i) {
            //console.log('i: ' + i)
            subSetOfData.push(dataToEvaluate[i]);
            //console.log('subsetOfData entry: ' + JSON.stringify(dataToEvaluate[i]))
        }
        return subSetOfData;
    };
    StochasticChartEntries.prototype.findStartAddressBasedOnDate = function (dataToEvaluate, dateToFind) {
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
    return StochasticChartEntries;
}());
exports.default = StochasticChartEntries;
