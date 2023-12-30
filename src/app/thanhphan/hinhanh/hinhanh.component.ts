import { Component, forwardRef, ViewEncapsulation, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Camera, CameraResultType, GalleryPhoto } from '@capacitor/camera';

@Component({
  selector: 'app-hinhanh',
  templateUrl: './hinhanh.component.html',
  styleUrls: ['./hinhanh.component.scss'],
})
export class HinhanhComponent implements OnInit {
  @Input() luonganh: string = "0" // 0: 1 anh, 1: nhieu anh
  @Output() thaydoi = new EventEmitter<any>();
  public hinhanh = []
  public mokhung = false
  constructor() {}

  ngOnInit() { }

  ionViewOnEnter() { }

  public async chupanh() {
    this.mokhung = false
    const anhchup = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64
    });
    var dulieuanh = "data:image/jpeg;base64," + anhchup.base64String;
    if (this.luonganh == '0') this.hinhanh = [dulieuanh]
    else this.hinhanh.push(dulieuanh)
    this.thaydoi.emit(this.hinhanh)
  }

  public chonanh() {
    this.mokhung = false
    Camera.pickImages({
      quality: 90,
    }).then(file_uri => {
      console.log(file_uri);
      file_uri.photos.forEach(photo_uri => {
        this.readAsBase64(photo_uri).then((base64: string) => {
          if (this.luonganh == '0') this.hinhanh = [base64]
          else this.hinhanh.push(base64)
          this.thaydoi.emit(this.hinhanh)
        })
      });
    }, err => console.log(err));
  }

  public xoaanh(thutu: number) {
    this.hinhanh = this.hinhanh.filter((hinhanh, thutuhinhanh) => {
      return thutu !== thutuhinhanh
    })
  }

  private async readAsBase64(cameraPhoto: GalleryPhoto) {
    const response = await fetch(cameraPhoto.webPath!);
    const blob = await response.blob();
    return new Promise(resolve => {
      const reader = new FileReader
      reader.onload = () => {
        resolve(reader.result)
      }
      reader.readAsDataURL(blob)
    })
  }
}
