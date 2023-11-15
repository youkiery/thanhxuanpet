import { Injectable } from '@angular/core';
import { Storage, ref, uploadString, getDownloadURL } from '@angular/fire/storage';
import { XemanhComponent } from '../thanhphan/xemanh/xemanh.component';
import { ModalController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class HinhanhService {
  public dulieu = []
  public kichthuoc = 960
  constructor(
    public firestore: Storage,
    public storage: Storage,
    public modalCtrl: ModalController
  ) { }

  public async xem(diachianh: string) {
    const modal = await this.modalCtrl.create({
      component: XemanhComponent,
      componentProps: {
        hinhanh: diachianh
      }
    });
    modal.present();
  }

  public thaydoi(event) {
    this.dulieu = event
  }

  public datkichthuoc(kichthuoc: number) {
    this.kichthuoc = kichthuoc
    this.dulieu = []
  }

  public async taitoanboanhlen() {
    return new Promise((resolve) => {
      let bodem = this.dulieu.length
      if (bodem == 0) resolve(this.dulieu)
      this.dulieu.forEach((hinhanh, thutu) => {
        if (hinhanh < 200) {
          bodem--
          if (bodem == 0) resolve(this.dulieu)
        }
        else {
          this.taianhlen(hinhanh).then((url) => {
            this.dulieu[thutu] = url
            bodem--
            if (bodem == 0) resolve(this.dulieu)
          })
        }
      });
    })
  }

  public taianhlen(image: string) {
    return new Promise((resolve) => {
      const path = '/storage/' + new Date().getTime() + '.jpg';
      let base64 = image.substring(image.indexOf(',') + 1);
      let metadata = {
        contentType: 'image/jpeg',
      };
      
      const storageRef = ref(this.storage, path);
      uploadString(storageRef, base64, 'base64', metadata).then((snapshot) => {
        getDownloadURL(storageRef).then(url => {
          resolve(url)
        })
       }, (error) => { resolve('') })
    })
  }
}
