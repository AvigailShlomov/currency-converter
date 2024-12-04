import { Component, Input, OnInit } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import { HistoricalRates } from '../../models/currency.models';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-rate-chart',
  standalone: true,
  imports: [],
  templateUrl: './rate-chart.component.html',
  styleUrl: './rate-chart.component.css'
})
export class RateChartComponent implements OnInit {
  // @Input() fromCurrency: string=""; /**@todo: is this ok? */
  // @Input() toCurrency: string="";
  historicalRates: HistoricalRates | null = null;/**@todo: maybe not null */
  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    // this.getChartData();
  }

  // getChartData() {
  //   this.currencyService.getHistoricalRates(this.fromCurrency, this.toCurrency).subscribe({
  //     next:( (res)=>{
  //       console.log("rate chart",res);
        
  //       // this.historicalRates={
  //       //   base:res.base,
  //       //   start_date:res.start_date,
  //       //   end_date:res.end_date,
         
  //       // }
  //     }

  //     )
  //   })

  // }


}
