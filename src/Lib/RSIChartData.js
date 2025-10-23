"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RSIChartData = /** @class */ (function () {
    function RSIChartData(dateOfClosein, closeIn, upwardMeanIn, downwardMeanIn, rsiValueIn) {
        this.dateOfClose = dateOfClosein;
        this.close = closeIn;
        this.upwardMean = upwardMeanIn;
        this.downwardMean = downwardMeanIn;
        this.rsiValue = rsiValueIn;
    }
    RSIChartData.prototype.toString = function () {
        return "dateOfClose: " + this.dateOfClose + ', close: ' + this.close + ', upwardMean: ' + this.upwardMean +
            ', downwardMean: ' + this.downwardMean + ', rsiValue: ' + this.rsiValue;
    };
    return RSIChartData;
}());
exports.default = RSIChartData;
