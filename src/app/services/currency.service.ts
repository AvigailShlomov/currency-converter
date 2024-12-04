import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { converterResponse, HistoricalRates } from '../models/currency.models';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private baseUrl = "https://api.frankfurter.dev/v1";

  constructor(private http: HttpClient) { }

  convertCurrency(from: string, to: string, amount: number): Observable<converterResponse> {
    return this.http.get<any>(`${this.baseUrl}/latest?amount=${amount}&base=${from}&symbols=${to}`);
  }

  getHistoricalRates(fromCurr: string, toCurr: string): Observable<HistoricalRates> {
    const pastWeekDateRange = this.pastWeekDateRange();
    return this.http.get<HistoricalRates>(
      `${this.baseUrl}/${pastWeekDateRange.todayDate}..${pastWeekDateRange.lastWeekDate}&base=${fromCurr}&symbols=${toCurr}`
    );
  }

  /**@todo: maybe move to utils */
  private pastWeekDateRange(): { todayDate: Date, lastWeekDate: Date } {
    const today = new Date();
    let lastWeekDate = new Date();
    lastWeekDate.setDate(today.getDate() - 7);
    return { todayDate: today, lastWeekDate };
  }
}
