import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  async store(storageKey: string, value :any){

    const encryptedValue = btoa(escape(JSON.stringify(value)));
    await Preferences.set({
      key: storageKey,
      value: encryptedValue
    });

  }

  async get(storageKey: string){
    const res = await Preferences.get({key: storageKey});
    if(res.value){
      return JSON.parse(unescape(atob(res.value)));
    } else{
      return false;
    }
  }

  async removeItem(storageKey: string){
    await Preferences.remove({key: storageKey});
  }

  async clear(){
    await Preferences.clear();
  }
}
