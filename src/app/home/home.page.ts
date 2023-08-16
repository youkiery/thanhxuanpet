import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Storage, ref, uploadString, getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // public max = 960
  // public count = 0
  // public image = ""
  @ViewChild('pwaphoto') pwaphoto: ElementRef;
  constructor(
    // public firestore: Storage,
    // public http: HttpClient,
    // public storage: Storage,
  ) {}

  // public upload() {
  //   this.pwaphoto.nativeElement.click();
  // }

  // public async uploadPWA() {
  //   const fileList: FileList = this.pwaphoto.nativeElement.files;
  //   if (fileList && fileList.length > 0) {
  //     for (let i = 0; i < fileList.length; i++) {
  //       await this.firstFileToBase64(fileList[i]).then((result: string) => {
  //         let image = new Image();
  //         image.src = result
  //         image.onload = () => {
  //           let canvas = document.createElement('canvas')
  //           let context = canvas.getContext('2d')
  //           let rate = 1
  //           if (image.width > this.max || image.height > this.max) {
  //             if (image.width > image.height) rate = image.width / this.max
  //             else rate = image.height / this.max
  //           }
  //           let newWidth = image.width / rate
  //           let newHeight = image.height / rate
  //           canvas.width = newWidth
  //           canvas.height = newHeight
  //           context.drawImage(image, 0, 0, canvas.width, canvas.height)
  //           this.image = canvas.toDataURL('image/jpeg')
  //           console.log(this.image);
  //         }
  //       }, (err: any) => { });
  //     }
  //   }
  // }

  // private firstFileToBase64(fileImage: File): Promise<{}> {
  //   return new Promise((resolve, reject) => {
  //     let fileReader: FileReader = new FileReader();
  //     if (fileReader && fileImage != null) {
  //       fileReader.readAsDataURL(fileImage);
  //       fileReader.onload = () => {
  //         resolve(fileReader.result);
  //       };

  //       fileReader.onerror = (error) => {
  //         reject(error);
  //       };
  //     } else {
  //       reject(new Error('No file found'));
  //     }
  //   });
  // }

  // public uploadImage(image: string) {
  //   return new Promise((resolve) => {
  //     const path = '/storage/' + new Date().getTime() + '.jpg';
  //     let base64 = image.substr(image.indexOf(',') + 1);
  //     let metadata = {
  //       contentType: 'image/jpeg',
  //     };
      
  //     const storageRef = ref(this.storage, path);
  //     uploadString(storageRef, base64, 'base64', metadata).then((snapshot) => {
  //       getDownloadURL(storageRef).then(url => {
  //         resolve(url)
  //       })
  //      }, (error) => { resolve('') })
  //   })
  // }

  // public notify(string) {

  // }

  // public async checkpost(type: string, action: string, param: Object): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     param['type'] = type
  //     param['action'] = action
  //     this.http.post("", JSON.stringify(param)).toPromise().then((data) => {
  //       if (data['nogin']) {
  //         this.notify("Phiên đăng nhập hết hạn")
  //         this.navCtrl.navigateBack('/login')
  //         reject(data)
  //       }
  //       else if (data['outdate']) {
  //         this.link = data['link']
  //         this.navCtrl.navigateRoot('/update')
  //         this.defreeze()
  //       }
  //       else {
  //         if (data['messenger']) this.notify(data['messenger'])
  //         if (data['status']) resolve(data)
  //         else {
  //           reject(data)
  //         }
  //       }
  //     }, (error) => {
  //       if (error['messenger']) this.notify(error['messenger'])
  //       else this.notify('Có lỗi xảy ra >.<')
  //       reject(1)
  //     })
  //   })
  // }
}
