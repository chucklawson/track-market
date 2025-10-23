"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var UpGreenRight_png_1 = require("../../srcImages/UpGreenRight.png");
var DownRedRight_png_1 = require("../../srcImages/DownRedRight.png");
var BasicTickerEvaluaton_jsx_1 = require("../../Components/BasicTickerEvaluaton/BasicTickerEvaluaton.jsx");
var CalculateOverallProfitLoss_1 = require("../../Lib/ProfitLoss/CalculateOverallProfitLoss");
var CURRENT_HOLDINGS = [
    {
        ticker: "ENB",
        costBasis: '38.86',
        unitsOnHand: 110,
        calculateAccumulatedProfitLoss: true,
        baseYield: '5.56',
    },
    {
        ticker: "NLY",
        costBasis: '20.20',
        unitsOnHand: 400,
        calculateAccumulatedProfitLoss: true,
        baseYield: '13.86',
    },
    {
        ticker: "USA",
        costBasis: '7.06',
        unitsOnHand: 355,
        calculateAccumulatedProfitLoss: true,
        baseYield: '9.64',
    }
];
var DividendEntries = function () {
    var _a = (0, react_1.useState)('AAPL'), stockSymbolToFetch = _a[0], setStockSymbolToFetch = _a[1];
    var _b = (0, react_1.useState)('Dividend Entries'), headerValue = _b[0], setHeaderValue = _b[1];
    var _c = (0, react_1.useState)(0.0), todaysPercentageChange = _c[0], setTodaysPercentageChange = _c[1];
    var _d = (0, react_1.useState)(true), isTodaysChangePositive = _d[0], setIsTodaysChangePositive = _d[1];
    var _e = (0, react_1.useState)(0.0), slope = _e[0], setSlope = _e[1];
    var _f = (0, react_1.useState)(CURRENT_HOLDINGS), currentHoldings = _f[0], setCurrentHoldings = _f[1];
    var _g = (0, react_1.useState)((0, CalculateOverallProfitLoss_1.calculateProjectedYield)(CURRENT_HOLDINGS)), accumulatedValues = _g[0], setAccumulatedValues = _g[1];
    var onSelectTickerButtonHandler = function (tickerToEvaluate) {
        setStockSymbolToFetch(tickerToEvaluate);
        //console.log("Setting stockSymbolToFetch: " +stockSymbolToFetch)
    };
    var onSetHeader = function (headerValueIn) {
        setHeaderValue(headerValueIn);
    };
    var onSetTodaysPercentageChange = function (percentageChange, isChnagePositive) {
        setTodaysPercentageChange(percentageChange);
        setIsTodaysChangePositive(isChnagePositive);
    };
    var onSetSlope = function (slopeIn) {
        setSlope(slopeIn);
    };
    (0, react_1.useEffect)(function () {
        document.title = "Dividend Entries";
    }, []);
    (0, react_1.useEffect)(function () {
        //console.log("Running useEffect for: stockSymbolToFetch: " +stockSymbolToFetch)
    }, [stockSymbolToFetch, headerValue, slope]);
    return (<div className="text-center">
    <header className="bg-teal-100 text-teal-600 text-3xl font-bold h-18 justify-items-center">
      <div>
        {headerValue}
      </div>
      <div>
                {isTodaysChangePositive === true ?
            <div className='text-green-600 text-3xl font-bold'>

                        Today's Change: {todaysPercentageChange} %
                    </div> :
            <div className='text-red-600 text-3xl font-bold'>

                        Today's Change: {todaysPercentageChange} %
                    </div>}
      </div>     
      <div>
        {slope >= 0.0 ?
            <div className='text-green-600 text-3xl font-bold'>            
                {/*Exponential change: {slope}  */}              
                <img className="inline-block w-10 h-8 ml-7 " src={UpGreenRight_png_1.default} alt=""></img>                           
          </div> :
            <div className='text-red-600 text-3xl font-bold'>
                {/*} Exponential change: {slope} */} 
                  <img className="inline-block w-12 h-10 ml-7" src={DownRedRight_png_1.default} alt=""></img> 
          </div>}
        <div className='text-green-600 text-3xl font-bold'>             
            Projected Div's: ${accumulatedValues.totalProjectedGain}/Yield: {accumulatedValues.percentageGainLoss}%                       
        </div>
          
      </div>          
    </header>

    <BasicTickerEvaluaton_jsx_1.default onSelectTickerButtonHandler={onSelectTickerButtonHandler} onSetHeader={onSetHeader} baseHeader='Dividend Entries' onSetTodaysPercentageChange={onSetTodaysPercentageChange} onSetSlope={onSetSlope} tickerEntries={currentHoldings} backgroundLeft='bg-teal-100' buttonBackgroundColor='bg-teal-400'/>
    {/*<StockQuote stockSymbol={stockSymbolToFetch}/>*/}
    </div>);
};
exports.default = DividendEntries;
