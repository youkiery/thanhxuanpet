import { Component, ElementRef, ViewChild } from '@angular/core';
// import { HttpClient } from '@angular/common/http'
// import { Storage, ref, uploadString, getDownloadURL } from '@angular/fire/storage';
import { HinhanhService } from '../dichvu/hinhanh.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('pwaphoto') pwaphoto: ElementRef;
  images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
  password = ""
  ngayden: string
  ngaydi: string
  constructor(
    public hinhanh: HinhanhService,
    // public firestore: Storage,
    // public http: HttpClient,
    // public storage: Storage,
  ) {}

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
