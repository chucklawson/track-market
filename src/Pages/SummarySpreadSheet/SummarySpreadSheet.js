"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_2 = require("react");
var react_spreadsheet_1 = require("react-spreadsheet");
var StatementInput_jsx_1 = require("../../Components/SatementInput/StatementInput.jsx");
var StatementKeyMetrics_jsx_1 = require("../../Components/ApiCalls/StatementKeyMetrics.jsx");
var CollectStatementData_jsx_1 = require("../../lib/CollectStatementData.jsx");
var SummarySpreadSheet = function () {
    var _a = (0, react_2.useState)(''), tickerToGet = _a[0], setTickerToGet = _a[1];
    var _b = (0, react_2.useState)(false), updateTickerValue = _b[0], setUpdateTickerValue = _b[1];
    var _c = (0, react_2.useState)('bg-lime-400'), buttonBackgroundColor = _c[0], setbuttonBackgroundColor = _c[1];
    var _d = (0, react_2.useState)(''), classValuesLeft = _d[0], setClassValuesLeft = _d[1];
    var _e = (0, react_2.useState)({}), currentQuote = _e[0], setcurrentQuote = _e[1];
    var _f = (0, react_2.useState)({}), statmentAnalysisKeyMetrics = _f[0], setStatmentAnalysisKeyMetrics = _f[1];
    var _g = (0, react_2.useState)(8), periodsToShow = _g[0], setPeriodsToShow = _g[1];
    var _h = (0, react_2.useState)('quarter'), period = _h[0], setPeriod = _h[1];
    var _j = (0, react_2.useState)([]), data = _j[0], setData = _j[1];
    var _k = (0, react_2.useState)([]), col = _k[0], setCol = _k[1];
    var _l = (0, react_2.useState)([]), row = _l[0], setRow = _l[1];
    var _m = (0, react_2.useState)("Key Metrics - Summary"), headerValue = _m[0], setHeaderValue = _m[1];
    (0, react_2.useEffect)(function () {
        document.title = "StatementSpreadSheet";
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
        }
    };
    var onSetCurrentQuote = function (currentQuoteIn, statmentAnalysisKeyMetrics) {
        setcurrentQuote(currentQuoteIn);
        setStatmentAnalysisKeyMetrics(statmentAnalysisKeyMetrics);
    };
    var _o = react_1.default.useState(false), annualChecked = _o[0], setAnnualChecked = _o[1];
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
        //console.log("calling dailyValues")
        if (statmentAnalysisKeyMetrics[0] !== undefined) {
            var statementData = (0, CollectStatementData_jsx_1.loadStatmentMetricsData)(statmentAnalysisKeyMetrics);
            //console.log("statmentData length: " + statementData.length);
            //   console.log("statmentData: " + statementData);
            //console.log("Generating Price to Equity")
            //setPriceEarningsData(getPriceToEarningsChartData(statmentAnalysisKeyMetrics))
            //console.log("currentQuote: " + JSON.stringify(currentQuote));
            //console.log("statmentAnalysisKeyMetrics: " + JSON.stringify(statmentAnalysisKeyMetrics));
            setCol((0, CollectStatementData_jsx_1.buildColumnTitlesByPeriod)(statementData, periodsToShow));
            setRow((0, CollectStatementData_jsx_1.buildRowTitles)(statementData));
            setData((0, CollectStatementData_jsx_1.buildDataToShow)(statementData, periodsToShow));
        }
    }, [currentQuote, statmentAnalysisKeyMetrics, periodsToShow, period]);
    return (<div className='bg-gray-100 grid grid-cols-12 gap-4'>
      <div className={classValuesLeft}>
      </div>

      <div className='col-start-1 col-span-12'>
        <header className="bg-lime-100 text-lime-600 text-3xl font-bold h-18 justify-items-center p-1">
          <div>
            {headerValue}
          </div>
        </header>
      </div>

      <div className='col-start-5 col-span-4'>
        <div className='text-1xl text-gray-600 font-bold underline h-5 justify-start mt-3'>
          <label className='pl-2 pr-2'>
            <input type="checkbox" checked={annualChecked} onChange={annualChangeHandler}/>
            Use Annual Periods vs. Quarterly
          </label>
        </div>
        <StatementInput_jsx_1.default onTickerValue={onTickerChangeHandler} onPeriodsValue={onPeriodsChangeHandler} currentTicker={tickerToGet} containerBackGround={buttonBackgroundColor} runningStatment={true}></StatementInput_jsx_1.default>
        <StatementKeyMetrics_jsx_1.default stockSymbol={tickerToGet} period={period} onSetCurrentQuote={onSetCurrentQuote}/>

      </div>

      <div className='col-start-1 col-span-12 justify-items-center p-1'>

        <react_spreadsheet_1.default data={data} columnLabels={col} rowLabels={row} onChange={setData}/>

      </div>

    </div>);
};
exports.default = SummarySpreadSheet;
