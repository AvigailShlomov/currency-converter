import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { converterResponse, HistoricalRates } from '../models/currency.models';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private baseUrl = "https://api.frankfurter.dev/v1";

  constructor(private http: HttpClient) { }

  convertCurrency(from: string, to: string, amount: number): Observable<converterResponse> {
    return this.http.get<any>(`${this.baseUrl}/latest?amount=${amount}&base=${from}&symbols=${to}`);
  }

  getHistoricalRates(fromCurr: string, toCurr: string): Observable<HistoricalRates> {
    const dateFrom = this.lastWeekDate();

    return this.http.get<HistoricalRates>(
      `${this.baseUrl}/${dateFrom}..?base=${fromCurr}&symbols=${toCurr}`
    );
  }

  /**@todo: maybe move to utils*/
  private lastWeekDate(): string {
    let lastWeekDate = new Date();
    lastWeekDate.setDate(new Date().getDate() - 7);

    return this.formatDate(lastWeekDate);
  }

  private formatDate(date: Date): string {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }
}
