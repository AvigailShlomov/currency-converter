import { Injectable } from '@angular/core';
import { converterResponse } from '../models/currency.models';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private stroage_key = "My_Convertion_History_Key";

  constructor() { }

  saveConvertion() {
    //save new convertion 
  }
  getHistory(): converterResponse[] {
    const history: string | null = localStorage.getItem(this.stroage_key);
    return history ? JSON.parse(history) : []
  }

}
