import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyService } from '../../services/currency.service';
import { StorageService } from '../../services/storage.service';
import { RateChartComponent } from '../rate-chart/rate-chart.component';
import { Chart, ChartConfiguration, ChartData, ChartOptions, ChartType, registerables } from 'chart.js';
import { NgChartsModule } from 'ng2-charts'; 
import { log } from 'console';

Chart.register(...registerables)
@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [CommonModule, FormsModule, RateChartComponent,NgChartsModule],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.css'
})
export class ConverterComponent implements OnInit {
  amount: number = 1;
  fromCurrency: string = "ILS";
  toCurrency: string = "USD";
  result: number | null = null;
  currencies: string[] = ["ILS", 'EUR', 'USD', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY'];/**@todo: get currencies List from api */

  labels: string[] = ["2024-11-27", "2024-11-28", "2024-11-29"];
  data1: number[] = [1.0531, 1.0562, 1.0507];

 
  constructor(private currerncyService: CurrencyService,
    private storageService: StorageService
  ) { }

  ngOnInit() {

  }


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
          );

        }
        ),
        error: ((err) => alert("Error Wilte fetching currency conversion"))
      });

    this.currerncyService.getHistoricalRates(this.fromCurrency, this.toCurrency).subscribe({
      next: ((data) => {
        console.log(data);
        

        // const dates = Object.keys(data.rates);
        // const rates = dates.map(date => data.rates[date][this.fromCurrency]);

        // this.chartData.labels = dates;
        // this.chartData.datasets[0].data = rates;
      })
    })

    return;
  }
}
