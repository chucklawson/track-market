
export default interface Quote_V3 {
  symbol: string;
  name: string;
  price: number;
  changePercentage: number;
  change: number;
  dayLow: number;
  dayHigh: number;
  yearHigh: number;
  yearLow: number;
  marketCap: number;
  priceAvg50: number;
  priceAvg200: number;
  exchange:string
  volume: number,
  avgVolume: number,
  open: number,
  previousClose: number,
  eps:number,
  pe: number,
  earningsAnnouncement: string,
  sharesOutstanding: number,
  timestamp: number,
  }
