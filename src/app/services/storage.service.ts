import { Injectable } from '@angular/core';
import { ConversionForStorage, converterResponse } from '../models/currency.models';
import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private stroage_key = "My_Convertion_History_Key";

  constructor() { }
  getHistory(): ConversionForStorage[] {
    const history: string | null = localStorage.getItem(this.stroage_key);
    return history ? JSON.parse(history) : []
  }

  saveConvertion(newConversion: ConversionForStorage) { 
    const history = this.getHistory();
    const allConversions = [newConversion, ...history]    
    localStorage.setItem(this.stroage_key, JSON.stringify(allConversions))   
  }
}
