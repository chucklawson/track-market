import {useState, useEffect} from 'react';

interface TickerButtonProps{
  key:string;
  ticker: string;
  costBasis: number;
  currentQuantityOnHand: number;
  selectTickerButtonHandler(tickerIn:string, currentQuantityOnHandIn:string, totalCostIn:string): void;
  backgroundColor: string;
}

const TickerButton = (props:TickerButtonProps) => {


 const [buttonClassValues,setButtonClassValues] = useState('')


  // Took out argument for the on click event because not being used.
 //const onSelectHandler = (event: MouseEvent<HTMLButtonElement>)=> {
  const onClickeEventHandler = ()=> {
     {/*props.selectTickerButtonHandler(event.target.innerText);*/}
     const totalCost:number=props.currentQuantityOnHand*props.costBasis
     props.selectTickerButtonHandler(props.ticker,      
      props.currentQuantityOnHand.toFixed(3),
      totalCost.toFixed(2)
      )
  };

  useEffect(() => {  
    setButtonClassValues(props.backgroundColor+' p-1 rounded-md ml-2 mr-2 mt-1 text-white hover:text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-stone-200 duration-300')
}, [props.backgroundColor]);

    if(buttonClassValues.length<1)
    {
      return<>
      </>
    }

    return (
        < button className={buttonClassValues} style={{ width: '140px' }} onClick={onClickeEventHandler}>
          <div>
             {props.costBasis === (0.0) ?
              <div>
                 {props.ticker}  Unk, {props.currentQuantityOnHand}
              </div>:
              <div>
                  {props.ticker} {props.costBasis}, {props.currentQuantityOnHand}
              </div>
            }
          </div>
        </button>
  );
};

export default TickerButton;