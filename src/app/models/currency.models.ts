export interface converterResponse {
    amount: number;
    base: string;
    date: string;
    rates: { [key: string]: number };
}

export interface ConversionForStorage {
    amount: number;
    from: string;
    to: string;
    result: number;
    date: Date;
  }

