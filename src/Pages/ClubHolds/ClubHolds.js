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
        calculateAccumulatedProfitLoss: true,
    },
    {
        ticker: "VOO",
        costBasis: '0.0',
        unitsOnHand: 0,
        calculateAccumulatedProfitLoss: true,
    },
    {
        ticker: "QQQ",
        costBasis: '0.0',
        unitsOnHand: 0,
        calculateAccumulatedProfitLoss: true,
    },
    {
        ticker: "AAPL",
        costBasis: '18.96',
        unitsOnHand: 855,
        calculateAccumulatedProfitLoss: true,
    },
    {
        ticker: "ABT",
        costBasis: '110.10',
        unitsOnHand: 700,
        calculateAccumulatedProfitLoss: true,
    },
    {
        ticker: "BBY",
        costBasis: '77.78',
        unitsOnHand: 700,
        calculateAccumulatedProfitLoss: true,
    },
    {
        ticker: "COST",
        costBasis: '289.90',
        unitsOnHand: 75,
        calculateAccumulatedProfitLoss: true,
    },
    {
        ticker: "CRM",
        costBasis: '161.05',
        unitsOnHand: 200,
        calculateAccumulatedProfitLoss: true,
    },
    {
        ticker: "ETN",
        costBasis: '239.91',
        unitsOnHand: 275,
        calculateAccumulatedProfitLoss: true,
    },
    {
        ticker: "GOOGL",
        costBasis: '63.37',
        unitsOnHand: 500,
        calculateAccumulatedProfitLoss: true,
    },
    {
        ticker: "HON",
        costBasis: '188.22',
        unitsOnHand: 245,
        calculateAccumulatedProfitLoss: true,
    },
    {
        ticker: "LIN",
        costBasis: '313.27',
        unitsOnHand: 165,
        calculateAccumulatedProfitLoss: true,
    },
    {
        ticker: "META",
        costBasis: '189.83',
        unitsOnHand: 265,
        calculateAccumulatedProfitLoss: true,
    },
    {
        ticker: "MS",
        costBasis: '83.63',
        unitsOnHand: 750,
        calculateAccumulatedProfitLoss: true,
    },
    {
        ticker: "NXT",
        costBasis: '42.90',
        unitsOnHand: 1150,
        calculateAccumulatedProfitLoss: true,
    },
    {
        ticker: "PANW",
        costBasis: '218.67',
        unitsOnHand: 230,
        calculateAccumulatedProfitLoss: true,
    },
    {
        ticker: "TJX",
        costBasis: '66.15',
        unitsOnHand: 750,
        calculateAccumulatedProfitLoss: true,
    },
    {
        ticker: "WFC",
        costBasis: '37.15',
        unitsOnHand: 2100,
        calculateAccumulatedProfitLoss: true,
    }
];
function ClubHolds() {
    var _a = (0, react_1.useState)('AAPL'), stockSymbolToFetch = _a[0], setStockSymbolToFetch = _a[1];
    var _b = (0, react_1.useState)('Club Holds'), headerValue = _b[0], setHeaderValue = _b[1];
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
        document.title = "Club Holds";
    }, []);
    (0, react_1.useEffect)(function () {
        //console.log("Running useEffect for: stockSymbolToFetch: " +stockSymbolToFetch)
    }, [stockSymbolToFetch, headerValue, slope]);
    return (<div className="text-center">
    <header className="bg-sky-100 text-sky-600 text-3xl font-bold h-18 justify-items-center">
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

    <BasicTickerEvaluaton_jsx_1.default onSelectTickerButtonHandler={onSelectTickerButtonHandler} onSetHeader={onSetHeader} baseHeader='Club Holds' onSetTodaysPercentageChange={onSetTodaysPercentageChange} onSetSlope={onSetSlope} tickerEntries={currentHoldings} backgroundLeft='bg-sky-100' buttonBackgroundColor='bg-sky-400'/>
    {/*<StockQuote stockSymbol={stockSymbolToFetch}/>*/}
    </div>);
}
exports.default = ClubHolds;
