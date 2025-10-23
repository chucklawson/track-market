interface TickerInputProps {
    onTickerValue(tickerValue: string, startDate: string, endDate: string, adjustedStartDate: string): void;
    currentTicker: string;
    startDate: string;
    endDate: string;
    containerBackGround: string;
}
declare const TickerInput: (props: TickerInputProps) => any;
export default TickerInput;
