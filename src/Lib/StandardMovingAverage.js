"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataPoint_jsx_1 = require("./DataPoint.jsx");
var StandardChartData_jsx_1 = require("./StandardChartData.jsx");
var StandardMovingAverage = /** @class */ (function () {
    function StandardMovingAverage(oneYearOfDataIn, numberOfDaystoLookBackIn) {
        this.oneYearOfData = oneYearOfDataIn;
        this.numberOfDaystoLookBack = numberOfDaystoLookBackIn;
    }
    StandardMovingAverage.prototype.generateTheAverages = function (accumulatedChartDataIn) {
        this.accumulatedChartData = accumulatedChartDataIn;
        //console.log("calling this.generateTheDataPointsSimpleMovingAverage, this.numberOfDaystoLookBack: " + this.numberOfDaystoLookBack + ', this.oneYearOfData.length: ' + this.oneYearOfData.length)
        var datapoints = this.generateTheDataPointsSimpleMovingAverage(this.numberOfDaystoLookBack, this.oneYearOfData);
        //console.log('datapoints returned: ' + datapoints.length)
        //console.log('this.numberOfDaystoLookBack = ' +this.numberOfDaystoLookBack)
        //console.log('this.accumulatedChartData.length: ' + this.accumulatedChartData.length)
        //console.log('accumulatedChartData: ' + JSON.stringify(this.accumulatedChartData))
        //console.log('accumulatedChartData to match up against: ' + this.accumulatedChartData.length)
        //console.log('starting date = ' +this.accumulatedChartData[0].dateOfClose)
        var commonStartAddress = 0;
        for (var i = 0; i < datapoints.length; ++i) {
            if (datapoints[i].date === this.accumulatedChartData[0].dateOfClose) {
                commonStartAddress = i;
                //console.log('Setting commonStartAddress to: ' + commonStartAddress + ', the selected date: ' + this.accumulatedChartData[0].dateOfClose)
            }
        }
        var adjustedChartData = [];
        var k = commonStartAddress;
        var dataPointsToResolve = this.accumulatedChartData.length;
        //console.log('dataPointsToResolve: ' + dataPointsToResolve)
        //console.log('this.numberOfDaystoLookBack: ' + this.numberOfDaystoLookBack)
        //console.log('datapoints.length: ' + datapoints.length)
        if (dataPointsToResolve >= (datapoints.length - this.numberOfDaystoLookBack)) {
            dataPointsToResolve = ((datapoints.length - this.numberOfDaystoLookBack) - 1);
        }
        //console.log('dataPointsToResolve: ' + dataPointsToResolve)
        //for(let j=0; j < dataPointsToResolve;)
        for (var j = 0; j < this.accumulatedChartData.length;) {
            //console.log('j: ' + j + ', k: ' +k)
            //console.log('this.accumulatedChartData[j].simpleMovingAverage: ' + this.accumulatedChartData[j].simpleMovingAverage.toString())
            //console.log('datapoints[k].calculatedValue: ' + datapoints[k].calculatedValue.toString())
            //console.log('this.accumulatedChartData[j].dateOfClose: ' + this.accumulatedChartData[j].dateOfClose)
            //console.log('this.accumulatedChartData[j].dailyClosingPrice: ' + this.accumulatedChartData[j].dailyClosingPrice)
            var adjustedChartDataEntry = new StandardChartData_jsx_1.default(this.accumulatedChartData[j].dateOfClose, this.accumulatedChartData[j].dailyClosingPrice, datapoints[k].calculatedValue, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
            //console.log('adjustedChartDataEntry: ' + adjustedChartDataEntry.toString())
            adjustedChartData.push(adjustedChartDataEntry);
            ++j;
            ++k;
        }
        return adjustedChartData;
    };
    StandardMovingAverage.prototype.generateTheDataPointsSimpleMovingAverage = function (numberOfDaystoLookBack, eodResponseInfo) {
        //console.log('eodResponseInfo: ' + JSON.stringify(eodResponseInfo))    
        //console.log('generateTheDataPointsSimpleMovingAverage eodResponseInfo.length: ' + eodResponseInfo.length + ', numberOfDaystoLookBack: ' + numberOfDaystoLookBack)
        if (eodResponseInfo.length < numberOfDaystoLookBack) {
            console.log('Returning: eodResponseInfo.length < numberOfDaystoLookBack');
            return null;
        }
        var dataPoints = [];
        // this generates an up to the date average
        for (var i = numberOfDaystoLookBack; i < eodResponseInfo.length; ++i) {
            var tempDouble = this.generateOneDataPoint(i, numberOfDaystoLookBack, eodResponseInfo);
            var aDataPoint = new DataPoint_jsx_1.default(eodResponseInfo[i].date, tempDouble);
            dataPoints.push(aDataPoint);
            //console.log("Added aDataPoint:", aDataPoint.toString());
        }
        //console.log('dataPoints.length: ' + dataPoints.length)
        return dataPoints;
    };
    // this geneates a simple moving average value for one datapoint
    StandardMovingAverage.prototype.generateOneDataPoint = function (startAddress, numberOfDaystoLookBack, eodResponseInfo) {
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
            summedCloses += parseFloat(eodResponseInfo[i].close);
        }
        var devisor = numberOfDaystoLookBack;
        return summedCloses / devisor;
    };
    // generates datapoints as a simpleMoving average for the entire set of data less the number of days to look back.
    StandardMovingAverage.prototype.generateTheUnrestrictedAverages = function () {
        console.log("calling this.generateTheUnrestrictedAverages, this.numberOfDaystoLookBack: " + this.numberOfDaystoLookBack
            + ', this.oneYearOfData.length: ' + this.oneYearOfData.length);
        var datapoints = this.generateTheDataPointsSimpleMovingAverage(this.numberOfDaystoLookBack, this.oneYearOfData);
        //console.log('datapoints returned: ' + datapoints.length)
        //console.log("datapoints:" + JSON.stringify(datapoints))
        return datapoints;
    };
    StandardMovingAverage.prototype.toString = function () {
        return "StandardMovingAverage, length: " + this.oneYearOfData.length + ', this.numberOfDaystoLookBack: ' + this.numberOfDaystoLookBack;
    };
    return StandardMovingAverage;
}());
exports.default = StandardMovingAverage;
