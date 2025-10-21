
export default interface HistoricalPriceFull_V3 {
  symbol: string;
  date?: string
  open?: number;
  high?: number;
  low?: number;
  close?: number;
  volume?: number | bigint;
  change?: number;
  changePercent?:number;
  vwap?: number
}