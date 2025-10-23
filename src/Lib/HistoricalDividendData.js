"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HistoricalDividendData = /** @class */ (function () {
    function HistoricalDividendData(dataObjectIn) {
        this.date = dataObjectIn.date;
        this.label = dataObjectIn.label;
        this.adjDividend = dataObjectIn.adjDividend;
        this.dividend = dataObjectIn.dividend;
        this.recordDate = dataObjectIn.recordDate;
        this.paymentDate = dataObjectIn.paymentDate;
        this.declarationDate = dataObjectIn.declarationDate;
    }
    HistoricalDividendData.prototype.toString = function () {
        return "date: " + this.date + ', label: ' + this.label
            + ', adjDividend: ' + this.adjDividend + ', dividend: ' + this.dividend
            + ', recordDate: ' + this.recordDate + ', paymentDate: ' + this.paymentDate
            + ', declarationDate: ' + this.declarationDate;
    };
    return HistoricalDividendData;
}());
exports.default = HistoricalDividendData;
