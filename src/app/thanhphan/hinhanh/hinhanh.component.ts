import { Component, forwardRef, ViewEncapsulation, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Camera, CameraResultType, GalleryPhotos } from '@capacitor/camera';

@Component({
  selector: 'app-hinhanh',
  templateUrl: './hinhanh.component.html',
  styleUrls: ['./hinhanh.component.scss'],
})
export class HinhanhComponent implements OnInit {
  @Input() luonganh: number = 0 // 0: 1 anh, 1: nhieu anh
  @Output() thaydoi = new EventEmitter<any>();
  public hinhanh = []
  constructor() { }

  ngOnInit() {
    console.log(this.hinhanh);
    console.log(this.luonganh);
  }

  ionViewOnEnter() {  }

  public async chupanh() {
    const anhchup = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64
    });
    var dulieuanh = "data:image/jpeg;base64," + anhchup.base64String;
    if (!this.luonganh) this.hinhanh = [dulieuanh]
    else this.hinhanh.push(dulieuanh)
    this.thaydoi.emit(this.hinhanh)
  }

  public chonanh() {
    Camera.pickImages({
      quality: 90,
    }).then(file_uri => {
      this.readAsBase64(file_uri).then((base64: string) => {
        if (!this.luonganh) this.hinhanh = [base64]
        else this.hinhanh.push(base64)
        this.thaydoi.emit(this.hinhanh)
      })
    }, err => console.log(err));
  }

  private async readAsBase64(cameraPhoto: GalleryPhotos) {
    const response = await fetch(cameraPhoto.photos[0].webPath!);
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
