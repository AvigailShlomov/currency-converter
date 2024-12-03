import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { ConversionForStorage } from '../../models/currency.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit {
  conversionHistory: ConversionForStorage[] = [];

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.conversionHistory = this.storageService.getHistory();
  }

}
