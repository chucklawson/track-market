"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDate_2025 = exports.getDate_2021 = exports.getDate_2017 = exports.convertDateForDateInputPicker = exports.findTheHighValueBasedOnDate = exports.findTheLowValueBasedOnDate = exports.findAValueBasedOnDate = exports.getAHistoricDateBySubtractingFromNow = exports.goBackSpecificNumberOfDays = void 0;
var GetValuesBasedOnDate = /** @class */ (function () {
    function GetValuesBasedOnDate(dateIn) {
        this.date = dateIn;
    }
    GetValuesBasedOnDate.prototype.getAHistoricDateBySubtractingFromNow = function (numberOfDaysToGoBack, oneYearHistoryChecked) {
        var date = new Date();
        if (oneYearHistoryChecked === true) {
            date.setDate(date.getDate() - 1);
            date.setFullYear(date.getFullYear() - 1);
        }
        else {
            date.setDate(date.getDate() - numberOfDaysToGoBack);
        }
        return date;
    };
    GetValuesBasedOnDate.prototype.goBackSpecificNumberOfDays = function (adjustedTimeSeriesIn, numberOfDaysToGoBack) {
        var adjustedTimeSeries = adjustedTimeSeriesIn;
        if (adjustedTimeSeries.length < 2) {
            return -1.0;
        }
        var dateToLocate = (0, exports.getAHistoricDateBySubtractingFromNow)(numberOfDaysToGoBack, false);
        /*
        console.log('adjustedTimeSeries stringified: '+ JSON.stringify(adjustedTimeSeries[0]))
        
        for(let i=0;i<adjustedTimeSeries.length;++i)
        {
            console.log('adjustedTimeSeries.date: ' + adjustedTimeSeries[i].date, ', adjClose: ' + adjustedTimeSeries[i].adjClose)
        }
        */
        var value = (0, exports.findAValueBasedOnDate)(dateToLocate, adjustedTimeSeries);
        return value;
    };
    GetValuesBasedOnDate.prototype.findAValueBasedOnDate = function (dateToLocate, timeSeries) {
        var value = 0.0;
        //console.log('findAValueBasedOnDate, dateToLocate: ' + dateToLocate.toLocaleDateString());
        for (var i = 0; i < timeSeries.length; ++i) {
            var tempDate = new Date(timeSeries[i].date);
            if (tempDate <= dateToLocate) {
                value = timeSeries[i].adjClose;
                //console.log('findAValueBasedOnDate, tempDate: ' + tempDate.toLocaleDateString() + ', value: ' + value);
            }
            else {
                //console.log('findAValueBasedOnDate, BREAKING, tempDate: ' + tempDate.toLocaleDateString() + ', value: ' + timeSeries[i].adjClose);
                value = timeSeries[i].adjClose;
                break;
            }
        }
        return value;
    };
    GetValuesBasedOnDate.prototype.findTheLowValueBasedOnDate = function (dateToLocate, timeSeries) {
        var lowValue = 10000000.0;
        //console.log('findTheHighValueBasedOnDate, dateToLocate: ' + dateToLocate.toLocaleDateString());
        for (var i = 0; i < timeSeries.length; ++i) {
            var tempDate = new Date(timeSeries[i].date);
            if (tempDate > dateToLocate) {
                if (parseFloat(timeSeries[i].adjClose) < lowValue) {
                    lowValue = parseFloat(timeSeries[i].adjClose);
                    //console.log('Set low value: ' + lowValue);
                }
            }
        }
        return lowValue;
    };
    GetValuesBasedOnDate.prototype.findTheHighValueBasedOnDate = function (dateToLocate, timeSeries) {
        var hightValue = 0.0;
        //console.log('findTheHighValueBasedOnDate, dateToLocate: ' + dateToLocate.toLocaleDateString());
        for (var i = 0; i < timeSeries.length; ++i) {
            var tempDate = new Date(timeSeries[i].date);
            if (tempDate > dateToLocate) {
                if (parseFloat(timeSeries[i].adjClose) > hightValue) {
                    hightValue = parseFloat(timeSeries[i].adjClose);
                    //console.log('Set high value: ' + hightValue);
                }
            }
        }
        return hightValue;
    };
    GetValuesBasedOnDate.prototype.convertDateForDateInputPicker = function (dateIn) {
        var isoDate = dateIn.toISOString();
        var convertedDate = isoDate.substring(0, isoDate.indexOf('T'));
        return convertedDate;
    };
    GetValuesBasedOnDate.prototype.getDate_2017 = function () {
        var date = new Date(Date.parse("2017-02-01T00:00:00"));
        //date=Date.parse("2017-02-01T00:00:00");        
        return date;
    };
    GetValuesBasedOnDate.prototype.getDate_2021 = function () {
        var date = new Date(Date.parse("2021-02-01T00:00:00"));
        //date=Date.parse("2021-02-01T00:00:00");        
        return date;
    };
    GetValuesBasedOnDate.prototype.getDate_2025 = function () {
        var date = new Date(Date.parse("2025-02-01T00:00:00"));
        //date=Date.parse("2025-02-01T00:00:00");        
        return date;
    };
    GetValuesBasedOnDate.prototype.toString = function () {
        return ("GetValuesBasedOnDate: " + this.date);
    };
    return GetValuesBasedOnDate;
}());
exports.default = GetValuesBasedOnDate;
;
exports.goBackSpecificNumberOfDays = (_a = new GetValuesBasedOnDate(Date.now), _a.goBackSpecificNumberOfDays), exports.getAHistoricDateBySubtractingFromNow = _a.getAHistoricDateBySubtractingFromNow, exports.findAValueBasedOnDate = _a.findAValueBasedOnDate, exports.findTheLowValueBasedOnDate = _a.findTheLowValueBasedOnDate, exports.findTheHighValueBasedOnDate = _a.findTheHighValueBasedOnDate, exports.convertDateForDateInputPicker = _a.convertDateForDateInputPicker, exports.getDate_2017 = _a.getDate_2017, exports.getDate_2021 = _a.getDate_2021, exports.getDate_2025 = _a.getDate_2025;
