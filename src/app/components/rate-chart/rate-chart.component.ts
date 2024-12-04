import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import { HistoricalRates } from '../../models/currency.models';

@Component({
  selector: 'app-rate-chart',
  standalone: true,
  imports: [],
  templateUrl: './rate-chart.component.html',
  styleUrl: './rate-chart.component.css'
})
export class RateChartComponent implements OnInit {
  historicalRates: HistoricalRates | null = null;/**@may be not null */
  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.getChartData();
  }

  getChartData() {
    this.currencyService.getHistoricalRates("ILS", "USD").subscribe({
      next:( (res)=>{
        // this.historicalRates={
        //   base:res.base,
        //   start_date:res.start_date,
        //   end_date:res.end_date,
         
        // }
      }

      )
    })

  }


}
