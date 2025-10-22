//import type Quote_V3 from './Quote_V3.ts'
//import type KeyMetrics_V3 from './KeyMetrics_V3.ts';
import type HistoricalPriceFull_V3 from './HistoricalPriceFull_V3.ts';

export default class GetValuesBasedOnDate {
    constructor(){
    }

    getAHistoricDateBySubtractingFromNow(numberOfDaysToGoBack: number ,oneYearHistoryChecked:boolean):typeof date
    {
        const date =new Date();
        
        if(oneYearHistoryChecked === true)
        {
            date.setDate(date.getDate()-1)
            date.setFullYear(date.getFullYear() -1);
        }
        else{
            date.setDate(date.getDate()-numberOfDaysToGoBack)
        }
        return date;
    }

    goBackSpecificNumberOfDays(adjustedTimeSeriesIn: HistoricalPriceFull_V3[], numberOfDaysToGoBack: number)
    {
        const adjustedTimeSeries=adjustedTimeSeriesIn;

        if(adjustedTimeSeries.length<2)
        {
            return -1.0;
        }

        const dateToLocate = getAHistoricDateBySubtractingFromNow(numberOfDaysToGoBack,false);

        /*
        console.log('adjustedTimeSeries stringified: '+ JSON.stringify(adjustedTimeSeries[0]))
        
        for(let i=0;i<adjustedTimeSeries.length;++i)
        {
            console.log('adjustedTimeSeries.date: ' + adjustedTimeSeries[i].date, ', adjClose: ' + adjustedTimeSeries[i].adjClose)
        }
        */

        const value = findAValueBasedOnDate(dateToLocate,adjustedTimeSeries)
        return value;
    }

    findAValueBasedOnDate(dateToLocate: Date,timeSeries: HistoricalPriceFull_V3[]): number | undefined
    {
      let value: number|undefined;
        //console.log('findAValueBasedOnDate, dateToLocate: ' + dateToLocate.toLocaleDateString());
        for(let i=0;i<timeSeries.length;++i)
        {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
          const tempDate=new Date(timeSeries[i].date)
            if(tempDate<=dateToLocate)
            {
                value = timeSeries[i].adjClose;
                //console.log('findAValueBasedOnDate, tempDate: ' + tempDate.toLocaleDateString() + ', value: ' + value);
            }
            else{
                //console.log('findAValueBasedOnDate, BREAKING, tempDate: ' + tempDate.toLocaleDateString() + ', value: ' + timeSeries[i].adjClose);
                value = timeSeries[i].adjClose;
                break;
            }
        }
        return value;
    }

    findTheLowValueBasedOnDate(dateToLocate:Date,timeSeries:HistoricalPriceFull_V3[])
    {
        let lowValue=10000000.0;
        //console.log('findTheHighValueBasedOnDate, dateToLocate: ' + dateToLocate.toLocaleDateString());
        for(let i=0;i<timeSeries.length;++i)
        {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
            const tempDate=new Date(timeSeries[i].date)
            if(tempDate>dateToLocate)
            {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
              if( timeSeries[i].adjClose < lowValue)
                {
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-expect-error
                  lowValue = timeSeries[i].adjClose;
                    //console.log('Set low value: ' + lowValue);
                }
            }
        }
        return lowValue;
    }

    findTheHighValueBasedOnDate(dateToLocate: Date,timeSeries:HistoricalPriceFull_V3[])
    {
        let hightValue=0.0;
        //console.log('findTheHighValueBasedOnDate, dateToLocate: ' + dateToLocate.toLocaleDateString());
        for(let i=0;i<timeSeries.length;++i)
        {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
            const tempDate=new Date(timeSeries[i].date)            
            if(tempDate>dateToLocate)
            {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              if( timeSeries[i].adjClose > hightValue)
                {
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-expect-error
                  hightValue = timeSeries[i].adjClose;
                    //console.log('Set high value: ' + hightValue);
                }
            }
        }
        return hightValue;
    }

    convertDateForDateInputPicker(dateIn:typeof Date):string
    {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
        const isoDate=dateIn.toISOString()
        const convertedDate=isoDate.substring(0,isoDate.indexOf('T'))
        return convertedDate;
    }

    getDate_2017():Date
    {
        const date =new Date(Date.parse("2017-02-01T00:00:00"));
        //date=Date.parse("2017-02-01T00:00:00");        
        return date;
    }

    getDate_2021():Date
    {
        const date =new Date(Date.parse("2021-02-01T00:00:00"));
        //date=Date.parse("2021-02-01T00:00:00");        
        return date;
    }

    getDate_2025():Date
    {
        const date =new Date(Date.parse("2025-02-01T00:00:00"));
        //date=Date.parse("2025-02-01T00:00:00");        
        return date;
    }


        toString() {
        //return ("GetValuesBasedOnDate: " + this.date);
      }
  };

  export const { goBackSpecificNumberOfDays, getAHistoricDateBySubtractingFromNow,
                     findAValueBasedOnDate, findTheLowValueBasedOnDate, findTheHighValueBasedOnDate,
                     convertDateForDateInputPicker,getDate_2017,getDate_2021,getDate_2025 } = new GetValuesBasedOnDate()



