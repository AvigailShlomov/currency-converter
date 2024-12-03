import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  baseUrl = "https://api.frankfurter.dev/v1";

  constructor(private http: HttpClient) { }

  convertCurrency(from: string, to: string, amount: number) {

    // fetch(`${this.baseUrl}/latest?base=${from}&symbols=${to}`)
    //   .then((resp) => resp.json())
    //   .then((data) => {
    //     const convertedAmount = (amount * data.rates[to]).toFixed(2);
    //     alert(`${amount} ${from} = ${convertedAmount} ${to}`);
    //   });
  }
}
