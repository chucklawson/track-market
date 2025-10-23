"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LWChartData_jsx_1 = require("./LWChartData.jsx");
var LWChartEntries = /** @class */ (function () {
    function LWChartEntries(larryWilliamsIn, startDateIn, endDateIn) {
        this.larryWilliams = larryWilliamsIn;
        this.startDate = startDateIn;
        this.endDate = endDateIn;
        //console.log("larryWilliams startDate: "+ this.startDate +  ", endDate: " + this.endDate);
        //console.log("larryWilliams: "+ JSON.stringify(this.larryWilliams))
        //LWChartData
        //console.log("larryWilliams length: "+ JSON.stringify(this.larryWilliams.length))
        //console.log("fullYearOfDataValuesIn: "+ JSON.stringify(fullYearOfDataValuesIn))
    }
    LWChartEntries.prototype.generateLWValues = function () {
        if ((this.larryWilliams == null) || (this.larryWilliams.length === undefined)) {
            console.log("larryWilliams.length is null or undefined");
            return null;
        }
        var startAddress = this.findAddressBasedOnDate(this.larryWilliams, this.startDate);
        var endAddress = this.findAddressBasedOnDate(this.larryWilliams, this.endDate);
        //console.log("start address: " + startAddress)
        //console.log("end address: " + endAddress)
        var LWData = [];
        for (var i = startAddress; i >= endAddress; --i) {
            var aLWChartData = new LWChartData_jsx_1.default(this.larryWilliams[i].date, this.larryWilliams[i].open, this.larryWilliams[i].high, this.larryWilliams[i].low, this.larryWilliams[i].close, this.larryWilliams[i].volume, this.larryWilliams[i].williams);
            LWData.push(aLWChartData);
        }
        //console.log("LWData:  " + LWData)
        return LWData;
    };
    LWChartEntries.prototype.findAddressBasedOnDate = function (dataToEvaluate, dateToFind) {
        //console.log('dataToEvaluate: ' + JSON.stringify(dataToEvaluate))
        //console.log('dateToFind: ' + dateToFind);
        var dateToLocate = new Date(dateToFind);
        dateToLocate = this.convertDateForAnalysis(dateToLocate);
        //consoleateToLocate: ' + dateToLocate);
        var address = -1;
        for (var i = 0; i < dataToEvaluate.length; i++) {
            var dateEvaluating = new Date(dataToEvaluate[i].date);
            dateEvaluating = this.convertDateForAnalysis(dateEvaluating);
            //console.log('dateEvaluating: ' + dateEvaluating);
            if (dateEvaluating <= dateToLocate) {
                //console.log('located ' + dateToFind + ' at address: ' + i + ' where the date is: ' + dataToEvaluate[i].date)
                address = i;
                break;
            }
        }
        return address;
    };
    LWChartEntries.prototype.convertDateForAnalysis = function (dateIn) {
        var isoDate = dateIn.toISOString();
        var convertedDate = isoDate.substring(0, isoDate.indexOf('T'));
        return convertedDate;
    };
    return LWChartEntries;
}());
exports.default = LWChartEntries;
