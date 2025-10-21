

export default interface Quote_V3 {
  symbol: string;
  name?: string;
  price?: number;
  changePercentage?: number;
  change?: number;
  volume?: number;
  dayLow?: number;
  dayHigh?: number;
  yearHigh?: number;
  yearLow?: number;
  marketCap?: number | bigint;
  priceAvg50?: number;
  priceAvg200?: number;
  exchange?:string
  open?: number;
  previousClose?: number;
  timestamp?: number | bigint;
  }