"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VGCostBasisItem = /** @class */ (function () {
    function VGCostBasisItem(accountIn, symbolIn, descriptionIn, acquiredDateIn, costBasisMethodIn, quantityIn, costPerSharein, totalCostIn, marketValueIn, shortTermGainLossIn, longTermGainLossIn, totalGainLossIn, coveredNonCoveredIn, percentGainLossIn) {
        this.account = accountIn;
        this.symbol = symbolIn;
        this.description = descriptionIn;
        this.aquiredDate = acquiredDateIn;
        this.costBasisMethod = costBasisMethodIn;
        this.quantity = quantityIn;
        this.costPerShare = costPerSharein;
        this.totalCost = totalCostIn;
        this.marketValue = marketValueIn;
        this.shortTermGainLoss = shortTermGainLossIn;
        this.longTermGainLoss = longTermGainLossIn;
        this.totalGainLoss = totalGainLossIn;
        this.coveredNonCovered = coveredNonCoveredIn;
        this.percentGainLoss = percentGainLossIn;
    }
    VGCostBasisItem.prototype.setAccount = function (accountIn) {
        this.account = accountIn;
    };
    VGCostBasisItem.prototype.getAccount = function () {
        return this.account;
    };
    VGCostBasisItem.prototype.setSymbol = function (symbolIn) {
        this.symbol = symbolIn;
    };
    VGCostBasisItem.prototype.getSymbol = function () {
        return this.symbol;
    };
    VGCostBasisItem.prototype.setDescription = function (descriptionIn) {
        this.description = descriptionIn;
    };
    VGCostBasisItem.prototype.getDescription = function () {
        return this.description;
    };
    VGCostBasisItem.prototype.setAcquiredDate = function (acquiredDateIn) {
        this.acquiredDate = acquiredDateIn;
    };
    VGCostBasisItem.prototype.getAcquiredDate = function () {
        return this.acquiredDate;
    };
    VGCostBasisItem.prototype.setCostBasisMethod = function (costBasisMethodIn) {
        this.costBasisMethod = costBasisMethodIn;
    };
    VGCostBasisItem.prototype.getCostBasisMethod = function () {
        return this.costBasisMethod;
    };
    VGCostBasisItem.prototype.setQuantity = function (quantityIn) {
        this.quantity = quantityIn;
    };
    VGCostBasisItem.prototype.getQuantity = function () {
        return this.quantity;
    };
    VGCostBasisItem.prototype.setCostPerShare = function (costPerShareIn) {
        this.costPerShare = costPerShareIn;
    };
    VGCostBasisItem.prototype.getCostPerShare = function () {
        return this.costPerShare;
    };
    VGCostBasisItem.prototype.setTotalCost = function (totalCostIn) {
        this.totalCost = totalCostIn;
    };
    VGCostBasisItem.prototype.getTotalCost = function () {
        return this.totalCost;
    };
    VGCostBasisItem.prototype.setMarketValue = function (marketValueIn) {
        this.marketValue = marketValueIn;
    };
    VGCostBasisItem.prototype.getMarketValue = function () {
        return this.marketValue;
    };
    VGCostBasisItem.prototype.setShortTermGainLoss = function (shortTermGainLossIn) {
        this.shortTermGainLoss = shortTermGainLossIn;
    };
    VGCostBasisItem.prototype.getShortTermGainLoss = function () {
        return this.shortTermGainLoss;
    };
    VGCostBasisItem.prototype.setLongTermGainLoss = function (longTermGainLossIn) {
        this.longTermGainLoss = longTermGainLossIn;
    };
    VGCostBasisItem.prototype.getLongTermGainLoss = function () {
        return this.longTermGainLoss;
    };
    VGCostBasisItem.prototype.setTotalGainLoss = function (totalGainLossIn) {
        this.totalGainLoss = totalGainLossIn;
    };
    VGCostBasisItem.prototype.getTotalGainLoss = function () {
        return this.totalGainLoss;
    };
    VGCostBasisItem.prototype.setCoveredNonCovered = function (coveredNonCoveredIn) {
        this.coveredNonCovered = coveredNonCoveredIn;
    };
    VGCostBasisItem.prototype.getCoveredNonCovered = function () {
        return this.coveredNonCovered;
    };
    VGCostBasisItem.prototype.setPercentGainLoss = function (percentGainLossIn) {
        this.percentGainLoss = percentGainLossIn;
    };
    VGCostBasisItem.prototype.getPercentGainLoss = function () {
        return this.percentGainLoss;
    };
    VGCostBasisItem.prototype.toString = function () {
        return ("VGCostBasisItem, account: " + this.account +
            ', symbol: ' + this.symbol +
            ', description: ' + this.description +
            ', aquiredDate: ' + this.aquiredDate +
            ', costBasisMethod: ' + this.costBasisMethod +
            ', quantity: ' + this.quantity +
            ',costPerShare: ' + this.costPerShare +
            ', totalCost: ' + this.totalCost +
            ', marketValue: ' + this.marketValue +
            ', shortTermGainLoss: ' + this.shortTermGainLoss +
            ',longTermGainLoss: ' + this.longTermGainLoss +
            ', totalGainLoss: ' + this.totalGainLoss +
            ',coveredNonCovered: ' + this.coveredNonCovered +
            ', percentGainLoss: ' + this.percentGainLoss);
    };
    return VGCostBasisItem;
}());
exports.default = VGCostBasisItem;
