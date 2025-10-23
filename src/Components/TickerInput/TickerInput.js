"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var GetValuesBasedOnDate_jsx_1 = require("../../lib/GetValuesBasedOnDate.jsx");
var TickerInput = function (props) {
    var _a = (0, react_1.useState)(''), enteredValue = _a[0], setEnteredValue = _a[1];
    var _b = (0, react_1.useState)(true), isValid = _b[0], setIsValid = _b[1];
    var _c = (0, react_1.useState)(''), startDate = _c[0], setStartDate = _c[1];
    var _d = (0, react_1.useState)(true), startDateIsValid = _d[0], setStartDateIsValid = _d[1];
    var _e = (0, react_1.useState)(''), endDate = _e[0], setEndDate = _e[1];
    var _f = (0, react_1.useState)(true), endDateIsValid = _f[0], setEndDateIsValid = _f[1];
    var _g = (0, react_1.useState)(''), containerClassValues = _g[0], setContainerClassValues = _g[1];
    var _h = react_1.default.useState(false), oneYearHistoryChecked = _h[0], setOneYearHistoryChecked = _h[1];
    var _j = react_1.default.useState(false), tFirstTermChecked = _j[0], settFirstTermChecked = _j[1];
    var _k = react_1.default.useState(false), bidenTermChecked = _k[0], setBidenTermChecked = _k[1];
    (0, react_1.useEffect)(function () {
        setEnteredValue('DIA');
        initializeStartAndEndDates();
        setContainerClassValues(props.containerBackGround + ' mt-5 flex p-5 justify-center items-center rounded');
    }, [oneYearHistoryChecked, tFirstTermChecked, bidenTermChecked]);
    (0, react_1.useEffect)(function () {
        //console.log('useEffect on TickerInput: ' + isValid)
    }, [isValid, startDateIsValid, endDateIsValid]);
    var tickerInputChangeHandler = function (event) {
        // event.preventDefault();
        if (event.target.value.trim() !== undefined) {
            setIsValid(true);
            setEnteredValue(event.target.value);
        }
    };
    var formSubmitHandler = function (event) {
        event.preventDefault();
        if ((enteredValue.trim().length === 0) ||
            (startDate.length === 0) ||
            (endDate.length === 0)) {
            if (enteredValue.trim().length === 0) {
                //console.log('Setting IsValid False')
                setIsValid(false);
            }
            if (startDate.length === 0) {
                //console.log('Setting startdate False')
                setStartDateIsValid(false);
            }
            if (endDate.length === 0) {
                //console.log('Setting enddate False')
                setEndDateIsValid(false);
            }
            return <react_1.default.Fragment />;
        }
        else {
            // reduce start date by one year..
            //console.log('startDate before returning: ' + startDate)
            var year = parseInt(startDate.substring(0, startDate.indexOf('-')));
            //console.log('year by itself: ' + year)
            var adjustedYear = year - 1;
            //console.log('adjustedYear: ' + adjustedYear)
            var adjustedStartDate = adjustedYear + startDate.substring(startDate.indexOf('-'));
            //console.log('adjustedStartDate: ' + adjustedStartDate)
            //console.log("Entered value are all true:" + enteredValue);
            props.onTickerValue(enteredValue, startDate, endDate, adjustedStartDate);
        }
    };
    var initializeStartAndEndDates = function () {
        if ((tFirstTermChecked === false) && (bidenTermChecked === false)) {
            var tempDate = (0, GetValuesBasedOnDate_jsx_1.getAHistoricDateBySubtractingFromNow)(60, oneYearHistoryChecked);
            //console.log('tempDate: ' + tempDate)
            tempDate.setHours(0);
            tempDate.setMinutes(0);
            tempDate.setSeconds(0);
            setStartDate((0, GetValuesBasedOnDate_jsx_1.convertDateForDateInputPicker)(tempDate));
            //  Originally set end date to today
            tempDate = new Date();
            tempDate.setHours(0);
            tempDate.setMinutes(0);
            tempDate.setSeconds(0);
            setEndDate((0, GetValuesBasedOnDate_jsx_1.convertDateForDateInputPicker)(tempDate));
        }
        if (tFirstTermChecked) {
            var tempDate = (0, GetValuesBasedOnDate_jsx_1.getDate_2017)();
            tempDate.setHours(0);
            tempDate.setMinutes(0);
            tempDate.setSeconds(0);
            setStartDate((0, GetValuesBasedOnDate_jsx_1.convertDateForDateInputPicker)(tempDate));
            tempDate = (0, GetValuesBasedOnDate_jsx_1.getDate_2021)();
            tempDate.setHours(0);
            tempDate.setMinutes(0);
            tempDate.setSeconds(0);
            setEndDate((0, GetValuesBasedOnDate_jsx_1.convertDateForDateInputPicker)(tempDate));
        }
        if (bidenTermChecked) {
            var tempDate = (0, GetValuesBasedOnDate_jsx_1.getDate_2021)();
            tempDate.setHours(0);
            tempDate.setMinutes(0);
            tempDate.setSeconds(0);
            setStartDate((0, GetValuesBasedOnDate_jsx_1.convertDateForDateInputPicker)(tempDate));
            tempDate = (0, GetValuesBasedOnDate_jsx_1.getDate_2025)();
            tempDate.setHours(0);
            tempDate.setMinutes(0);
            tempDate.setSeconds(0);
            setEndDate((0, GetValuesBasedOnDate_jsx_1.convertDateForDateInputPicker)(tempDate));
        }
        //setStartDateIsValid(true); 
        //setEndDateIsValid(true);    
    };
    var startDateChangeHandler = function (event) {
        setStartDate(event.target.value);
        if (event.target.value.length > 0) {
            //console.log('Setting startdate Valid true')        
            setStartDateIsValid(true);
        }
    };
    var endDateChangeHandler = function (event) {
        setEndDate(event.target.value);
        if (event.target.value.length > 0) {
            //console.log('Setting endDate Valid true')
            setEndDateIsValid(true);
        }
    };
    var tFirstTermChangeHandler = function () {
        settFirstTermChecked(!tFirstTermChecked);
        setOneYearHistoryChecked(false);
        setBidenTermChecked(false);
    };
    var oneYearHistoryChangeHandler = function () {
        settFirstTermChecked(false);
        setOneYearHistoryChecked(!oneYearHistoryChecked);
        setBidenTermChecked(false);
    };
    var bidenTermChangeHandler = function () {
        settFirstTermChecked(false);
        setOneYearHistoryChecked(false);
        setBidenTermChecked(!bidenTermChecked);
    };
    return (<div className='col-start-3 col-span-5 p-10 m-8'>

      <div className={containerClassValues}>

      <form className='w-full max-w-lg' onSubmit={formSubmitHandler}> 
      <label className='text-1xl text-gray-600 font-bold underline h-5 justify-start mt-3 pl-2 pr-2'>
                <input type="checkbox" checked={tFirstTermChecked} onChange={tFirstTermChangeHandler}/>
                2017-2020
            </label>
            <label className='text-1xl text-gray-600 font-bold underline h-5 justify-start mt-3 pl-2 pr-2'>
                <input type="checkbox" checked={oneYearHistoryChecked} onChange={oneYearHistoryChangeHandler}/>
                Go Back One Year
            </label>
            <label className='text-1xl text-gray-600 font-bold underline h-5 justify-start mt-3 pl-2 pr-2'>
                <input type="checkbox" checked={bidenTermChecked} onChange={bidenTermChangeHandler}/>
                2021-2024
            </label>
            
            
        <div className='flex flex-wrap md:flex-nowrap'>      
            
          <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0 ml-1'>
            {isValid === true ?
            <label className='block uppercase text-xs text-gray-700 font-bold mb-2 tracking-wider'> Ticker {/*{enteredValue}*/}</label> :
            <label className='block uppercase text-xs text-gray-200 font-bold mb-2 tracking-wider bg-red-700 rounded'> Ticker {/*{enteredValue}*/}</label>}
            {/*placeholder='AAPL'*/}
              <input className='block py-1 px-2 rounded text-gray-700 w-full border border-green-500 bg-emerald-50' type="text" onChange={tickerInputChangeHandler} style={{ width: '70px' }} value={enteredValue}/>     
          </div>     

          <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
              {startDateIsValid === true ?
            <label className='block uppercase text-xs text-gray-700 font-bold mb-2 tracking-wider'> Startdate {/*{startDate}*/}</label> :
            <label className='block uppercase text-xs text-gray-200 font-bold mb-2 tracking-wider bg-red-700 rounded'> Startdate {/*{startDate}*/}</label>}
              <input className='block py-1 px-2 rounded w-full border border-green-500 bg-emerald-50' type='date' min='2017-01-01' max='2030-12-31' value={startDate} onChange={startDateChangeHandler} style={{ width: '130px' }}/>     
          </div>

          <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            {endDateIsValid === true ?
            <label className='block uppercase text-xs text-gray-700 font-bold mb-2 tracking-wider'> Enddate {/*{endDate}*/}</label> :
            <label className='block uppercase text-xs text-gray-200 font-bold mb-2 tracking-wider bg-red-700 rounded'> Enddate {/*{endDate}*/}</label>}
              <input className='block py-1 px-2 rounded w-full border border-green-500 bg-emerald-50' type='date' min='2019-01-01' max='2099-12-31' value={endDate} onChange={endDateChangeHandler} style={{ width: '130px' }}/>     
          </div>

          <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <button className='block uppercase text-xs bg-stone-500 p-1 rounded-md ml-2 mr-2 mt-5 text-white font-semibold hover:text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-stone-200 duration-300' style={{ width: '75px' }} type='submit'>
                                    Update Chart
            </button>
          </div>

        </div>
      </form>
            {/*div that contains the form*/}
    </div>
            {/* outer div */}
  </div>);
};
exports.default = TickerInput;
