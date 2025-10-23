"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VGCostBasisItem_jsx_1 = require("./VGCostBasisItem.jsx");
var CostBasisVanG = /** @class */ (function () {
    function CostBasisVanG(textToTranslateIn) {
        this.textToTranslate = textToTranslateIn;
    }
    CostBasisVanG.prototype.parseTextIn = function () {
        var lines = this.textToTranslate.split('\n');
        /*
        for (var line = 0; line < lines.length; line++) {
                console.log(lines[line]);
            }
        */
        if (lines.length >= 3) {
            for (var entryToEvaluate = 3; entryToEvaluate < lines.length; ++entryToEvaluate) {
                var oneLinesEntries = this.parseOneLinesEntries(lines[entryToEvaluate]);
                if (oneLinesEntries.length === 14) {
                    var aVGCostBasisItem = this.loadOneCostBasisItem(oneLinesEntries);
                    console.log('aVGCostBasisItem: ' + aVGCostBasisItem.toString() + '\n\n');
                }
            }
        }
    };
    CostBasisVanG.prototype.parseOneLinesEntries = function (textToParse) {
        var oneLinesEntries = textToParse.split(',');
        /*
        console.log('oneLinesEntries.length: ' + oneLinesEntries.length)
        for (var entry = 0; entry < oneLinesEntries.length; entry++) {
            console.log(oneLinesEntries[entry]);
        }
        */
        return oneLinesEntries;
    };
    CostBasisVanG.prototype.loadOneCostBasisItem = function (entriesIn) {
        var aVGCostBasisItem = new VGCostBasisItem_jsx_1.default(entriesIn[0], entriesIn[1], entriesIn[2], entriesIn[3], entriesIn[4], entriesIn[5], entriesIn[6], entriesIn[7], entriesIn[8], entriesIn[9], entriesIn[10], entriesIn[11], entriesIn[12], entriesIn[13]);
        return aVGCostBasisItem;
    };
    return CostBasisVanG;
}());
exports.default = CostBasisVanG;
