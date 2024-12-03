import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private stroage_key = "My_Convertion_History_Key";

  constructor() { }

  saveConvertion(){
    //save new convertion 
  }
  getHistory(){
//get all past conversions 
  }

}
