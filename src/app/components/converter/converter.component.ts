import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyService } from '../../services/currency.service';
import { StorageService } from '../../services/storage.service';
import { RateChartComponent } from '../rate-chart/rate-chart.component';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [CommonModule, FormsModule, RateChartComponent],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.css'
})
export class ConverterComponent {
  amount: number = 1;
  fromCurrency: string = "ILS";
  toCurrency: string = "USD";
  result: number | null = null;
  currencies: string[] = ["ILS", 'EUR', 'USD', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY'];/**@todo: get currencies List from api */

  constructor(private currerncyService: CurrencyService,
    private storageService: StorageService
  ) { }

  convert() {
    if (this.amount <= 0)
      return;
    this.currerncyService.convertCurrency(this.fromCurrency, this.toCurrency, this.amount)
      .subscribe({
        next: ((res) => {
          this.result = res.rates[this.toCurrency];
          this.storageService.saveConvertion(
            {
              amount: this.amount,
              from: this.fromCurrency,
              to: this.toCurrency,
              result: this.result,
              date: new Date()
            }
          )
        }
        ),
        error: ((err) => alert("Error Wilte fetching currency conversion"))
      })
    return;
  }
}
