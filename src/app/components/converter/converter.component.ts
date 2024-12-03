import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.css'
})
export class ConverterComponent {
  amount: number = 1;
  fromCurrency: string = "ILS";
  toCurrency: string = "USD";
  result: number | null = null;
  currencies: string[] = ["ILS", 'EUR', 'USD', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY'];/**@todo: get currencies List from api */

}