import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { converterResponse } from '../models/currency.models';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private baseUrl = "https://api.frankfurter.dev/v1";

  constructor(private http: HttpClient) { }

  convertCurrency(from: string, to: string, amount: number): Observable<converterResponse> {
    return this.http.get<any>(`${this.baseUrl}/latest?amount=${amount}&base=${from}&symbols=${to}`);
  }

  getHistoricalRates() {
    const pastWeekDateRange= this.pastWeekDateRange();


  }
  //https://api.frankfurter.dev/v1/2024-01-01..2024-01-02?symbols=USD&base=ILS

  /**@todo: maybe move to utils */
  private pastWeekDateRange(): { todayDate: Date, lastWeekDate: Date } {
    const todayDate = new Date();
    let lastWeekDate = new Date();
    lastWeekDate.setDate(todayDate.getDate() - 7);
    return { todayDate, lastWeekDate };
  }
}
