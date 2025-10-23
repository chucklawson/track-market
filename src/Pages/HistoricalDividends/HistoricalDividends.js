"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_2 = require("react");
var react_spreadsheet_1 = require("react-spreadsheet");
var StatementInput_jsx_1 = require("../../Components/SatementInput/StatementInput.jsx");
var HistoricalDividendQuote_jsx_1 = require("../../Components/ApiCalls/HistoricalDividendQuote.jsx");
var CollectHistoricalDividendData_jsx_1 = require("../../lib/CollectHistoricalDividendData.jsx");
var HistoricalDividends = function () {
    var _a = (0, react_2.useState)(''), tickerToGet = _a[0], setTickerToGet = _a[1];
    var _b = (0, react_2.useState)(false), updateTickerValue = _b[0], setUpdateTickerValue = _b[1];
    var _c = (0, react_2.useState)('bg-lime-400'), buttonBackgroundColor = _c[0], setbuttonBackgroundColor = _c[1];
    var _d = (0, react_2.useState)(''), classValuesLeft = _d[0], setClassValuesLeft = _d[1];
    var _e = (0, react_2.useState)({}), currentQuote = _e[0], setcurrentQuote = _e[1];
    var _f = (0, react_2.useState)({}), dividendData = _f[0], setDividendData = _f[1];
    var _g = (0, react_2.useState)(8), periodsToShow = _g[0], setPeriodsToShow = _g[1];
    var _h = (0, react_2.useState)('quarter'), period = _h[0], setPeriod = _h[1];
    var _j = (0, react_2.useState)(0), curnetYield = _j[0], setCurrentYield = _j[1];
    var _k = (0, react_2.useState)([]), data = _k[0], setData = _k[1];
    var _l = (0, react_2.useState)([]), col = _l[0], setCol = _l[1];
    var _m = (0, react_2.useState)([]), row = _m[0], setRow = _m[1];
    var _o = (0, react_2.useState)("Dividends"), headerValue = _o[0], setHeaderValue = _o[1];
    (0, react_2.useEffect)(function () {
        document.title = "Dividends";
        setbuttonBackgroundColor('bg-lime-400');
    }, []);
    var onTickerChangeHandler = function (tickerValue) {
        if (tickerValue.trim().length > 0) {
            // looks like a couple of guys that need a reducer
            //console.log('tickerValue: ' + tickerValue)
            setTickerToGet(tickerValue.trim());
            setUpdateTickerValue(true);
            //props.onSetHeader( props.baseHeader + " - " + tickerValue.trim());
            //console.log("tickerValue: " + tickerValue); 
        }
    };
    var onPeriodsChangeHandler = function (periodsToUse) {
        if (periodsToUse.trim().length > 0) {
            // looks like a couple of guys that need a reducer
            //console.log('periodsToUse: ' + periodsToUse)
            setPeriodsToShow(periodsToUse.trim());
            setUpdateTickerValue(true);
            //props.onSetHeader( props.baseHeader + " - " + tickerValue.trim());
            //console.log("periodsToShow: " + periodsToShow); 
        }
    };
    var onSetCurrentQuote = function (currentQuoteIn, dividendDataIn) {
        //console.log("dividendDataIn: " + JSON.stringify(dividendDataIn));
        setcurrentQuote(currentQuoteIn);
        setDividendData(dividendDataIn);
    };
    var _p = react_1.default.useState(false), annualChecked = _p[0], setAnnualChecked = _p[1];
    var annualChangeHandler = function () {
        setAnnualChecked(!annualChecked);
        if (!annualChecked === true) {
            setPeriod('annual');
            //console.log("setting period: annual");
        }
        else {
            setPeriod('quarter');
            //console.log("setting period: quarter");
        }
    };
    (0, react_2.useEffect)(function () {
        //console.log("calling load the dividend data into the spreadsheet")
        //console.log("dividendData: " + JSON.stringify(dividendData));
        if ((dividendData.historical !== undefined) && (dividendData.historical.length > 0)) {
            var historicalDividendData = (0, CollectHistoricalDividendData_jsx_1.loadHistoricalMetricsData)(dividendData.historical);
            //console.log("statmentData length: " + statementData.length);
            //   console.log("statmentData: " + statementData);
            //console.log("Generating Price to Equity")
            //setPriceEarningsData(getPriceToEarningsChartData(statmentAnalysisKeyMetrics))
            //console.log("currentQuote: " + JSON.stringify(currentQuote));
            //console.log("statmentAnalysisKeyMetrics: " + JSON.stringify(statmentAnalysisKeyMetrics));
            //console.log("calling setCol")
            setCol((0, CollectHistoricalDividendData_jsx_1.buildColumnTitles)());
            setRow((0, CollectHistoricalDividendData_jsx_1.buildRowTitles)(historicalDividendData, periodsToShow));
            setData((0, CollectHistoricalDividendData_jsx_1.buildHstoricalDataToShow)(historicalDividendData, periodsToShow));
            setCurrentYield((0, CollectHistoricalDividendData_jsx_1.calculateYield)(historicalDividendData, currentQuote));
        }
        else {
            setData([]);
            setCol([]);
            setRow([]);
            setCurrentYield(0.0);
        }
    }, [currentQuote, dividendData, periodsToShow]);
    return (<div className='bg-gray-100 grid grid-cols-12 gap-4'>
      <div className={classValuesLeft}>
    </div>

    <div className='col-start-1 col-span-12'>
            <header className="bg-lime-100 text-lime-600 text-3xl font-bold h-18 justify-items-center p-1">
                <div>
                    {headerValue}
                </div>
                <div className='text-green-600 text-3xl font-bold'>
                    Yield: {curnetYield} %
                </div>
            </header>        
    </div>

      <div className='col-start-5 col-span-4'>

          <StatementInput_jsx_1.default onTickerValue={onTickerChangeHandler} onPeriodsValue={onPeriodsChangeHandler} currentTicker={tickerToGet} containerBackGround={buttonBackgroundColor} runningStatment={false}></StatementInput_jsx_1.default> 
          <HistoricalDividendQuote_jsx_1.default stockSymbol={tickerToGet} onSetCurrentQuote={onSetCurrentQuote}/>
               
      </div>

      <div className='col-start-1 col-span-12 justify-items-center p-1'>

          <react_spreadsheet_1.default data={data} columnLabels={col} rowLabels={row} onChange={setData}/> 
        
      </div>    

    </div>);
};
exports.default = HistoricalDividends;
