export default class LWChartEntries {
    constructor(larryWilliamsIn: any, startDateIn: any, endDateIn: any);
    larryWilliams: any;
    startDate: any;
    endDate: any;
    generateLWValues(): LWChartData[];
    findAddressBasedOnDate(dataToEvaluate: any, dateToFind: any): number;
    convertDateForAnalysis(dateIn: any): any;
}
import LWChartData from "./LWChartData.jsx";
