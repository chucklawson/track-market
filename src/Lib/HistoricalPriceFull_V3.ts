
export default interface HistoricalPriceFull_V3 {
  date?: string,
  open?: number,
  high?: number,
  low?: number,
  close?: number,
  adjClose?: number,
  volume?: number| bigint,
  unadjustedVolume?: number | bigint,
  change?: number,
  changePercent?: number,
  vwap?: number,
  label?: string,
  changeOverTime?: number,
}
