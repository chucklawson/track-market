export default class DataPoint {
    constructor(dateIn: any, calculatedValueIn: any, simpleMovingAverageIn: any, expMovingAverageIn: any);
    date: any;
    calculatedValue: any;
    toString(): string;
}
