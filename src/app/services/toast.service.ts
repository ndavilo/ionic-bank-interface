import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastcontroller: ToastController) { }

  async presentToast(infoMessage: string){
    const toast = await this.toastcontroller.create({
      message: infoMessage,
      duration: 2000
    });
    toast.present();
  }
}
