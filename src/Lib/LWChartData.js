"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// not really being used
var LWChartData = /** @class */ (function () {
    function LWChartData(dateIn, openIn, highIn, lowIn, closeIn, volumeIn, williamsIn) {
        this.date = dateIn.substring(0, 10);
        this.open = openIn;
        this.high = highIn;
        this.low = lowIn;
        this.close = closeIn;
        this.volume = volumeIn;
        this.williams = williamsIn;
    }
    LWChartData.prototype.toString = function () {
        return 'date: ' + this.date + ', open: ' + this.open + ', high: ' + this.high
            + ', low: ' + this.low + ', close: ' + this.close + ', volume: ' + this.volume + ', williams: ' + this.williams;
    };
    return LWChartData;
}());
exports.default = LWChartData;
