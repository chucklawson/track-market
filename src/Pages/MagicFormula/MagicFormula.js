"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var UpGreenRight_png_1 = require("../../srcImages/UpGreenRight.png");
var DownRedRight_png_1 = require("../../srcImages/DownRedRight.png");
var BasicTickerEvaluaton_jsx_1 = require("../../Components/BasicTickerEvaluaton/BasicTickerEvaluaton.jsx");
var CURRENT_HOLDINGS = [
    {
        ticker: "DIA",
        costBasis: '0.0',
        unitsOnHand: 0,
    },
    {
        ticker: "VOO",
        costBasis: '0.0',
        unitsOnHand: 0,
    },
    {
        ticker: "QQQ",
        costBasis: '0.0',
        unitsOnHand: 0,
    },
    {
        ticker: "BKE",
        costBasis: '0.0',
        unitsOnHand: 25,
    },
    {
        ticker: "CVS",
        costBasis: '0.0',
        unitsOnHand: 0,
    },
    {
        ticker: "DDS",
        costBasis: '0.0',
        unitsOnHand: 0,
    },
    {
        ticker: "GILD",
        costBasis: '0.0',
        unitsOnHand: 0,
    },
    {
        ticker: "HPQ",
        costBasis: '0.0',
        unitsOnHand: 0,
    },
    {
        ticker: "MCK",
        costBasis: '0.0',
        unitsOnHand: 0,
    },
    {
        ticker: "MO",
        costBasis: '0.0',
        unitsOnHand: 183,
    },
    {
        ticker: "MRNA",
        costBasis: '0.0',
        unitsOnHand: 7,
    },
    {
        ticker: "NUE",
        costBasis: '0.0',
        unitsOnHand: 8,
    },
    {
        ticker: "OMC",
        costBasis: '0.0',
        unitsOnHand: 0,
    },
    {
        ticker: "PARA",
        costBasis: '0.0',
        unitsOnHand: 0,
    },
    {
        ticker: "PFE",
        costBasis: '0.0',
        unitsOnHand: 0,
    },
    {
        ticker: "RHI",
        costBasis: '0.0',
        unitsOnHand: 0,
    },
    {
        ticker: "SIGA",
        costBasis: '0.0',
        unitsOnHand: 0,
    },
    {
        ticker: "WSM",
        costBasis: '0.0',
        unitsOnHand: 15,
    },
];
var MagicFormula = function () {
    var _a = (0, react_1.useState)('AAPL'), stockSymbolToFetch = _a[0], setStockSymbolToFetch = _a[1];
    var _b = (0, react_1.useState)('Magic Formula'), headerValue = _b[0], setHeaderValue = _b[1];
    var _c = (0, react_1.useState)(0.0), todaysPercentageChange = _c[0], setTodaysPercentageChange = _c[1];
    var _d = (0, react_1.useState)(true), isTodaysChangePositive = _d[0], setIsTodaysChangePositive = _d[1];
    var _e = (0, react_1.useState)(0.0), slope = _e[0], setSlope = _e[1];
    var _f = (0, react_1.useState)(CURRENT_HOLDINGS), currentHoldings = _f[0], setCurrentHoldings = _f[1];
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
        document.title = "Magic Formula";
    }, []);
    (0, react_1.useEffect)(function () {
        //console.log("Running useEffect for: stockSymbolToFetch: " +stockSymbolToFetch)
    }, [stockSymbolToFetch, headerValue, slope]);
    return (<div className="text-center">
    <header className="bg-purple-100 text-purple-600 text-3xl font-bold h-18 justify-items-center">
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
      </div>          
    </header>

    <BasicTickerEvaluaton_jsx_1.default onSelectTickerButtonHandler={onSelectTickerButtonHandler} onSetHeader={onSetHeader} baseHeader='Magic Formula' onSetTodaysPercentageChange={onSetTodaysPercentageChange} onSetSlope={onSetSlope} tickerEntries={currentHoldings} backgroundLeft='bg-violet-100' buttonBackgroundColor='bg-violet-400'/>
    {/*<StockQuote stockSymbol={stockSymbolToFetch}/>*/}
    </div>);
};
exports.default = MagicFormula;
