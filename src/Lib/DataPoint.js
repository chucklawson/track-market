"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataPoint = /** @class */ (function () {
    function DataPoint(dateIn, calculatedValueIn, simpleMovingAverageIn, expMovingAverageIn) {
        this.date = dateIn;
        this.calculatedValue = calculatedValueIn;
    }
    DataPoint.prototype.toString = function () {
        return ("DataPoint date: " + this.date + ':, calculatedValue: ' + this.calculatedValue);
    };
    return DataPoint;
}());
exports.default = DataPoint;
