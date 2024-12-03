import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  baseUrl = "https://api.frankfurter.dev/v1";

  constructor(private http: HttpClient) { }

  convertCurrency(from: string, to: string, amount: number) :Observable<any> { /**@todo: add coversionResultModel */
    return this.http.get<any>(`${this.baseUrl}/latest?amount=${amount}&base=${from}&symbols=${to}`);
   }
}
