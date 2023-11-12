import { Component, Input, OnInit } from '@angular/core';
import { Camera, CameraResultType, GalleryPhotos } from '@capacitor/camera';

@Component({
  selector: 'app-hinhanh',
  templateUrl: './hinhanh.component.html',
  styleUrls: ['./hinhanh.component.scss'],
})
export class HinhanhComponent implements OnInit {
  @Input() luonganh: string // it, nhieu
  public hinhanh = {
    it: "",
    nhieu: []
  }
  constructor() { }

  ngOnInit() { }

  ionViewOnEnter() { }

  public async chupanh() {
    const anhchup = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64
    });
    var dulieuanh = "data:image/jpeg;base64," + anhchup.base64String;
    if (this.luonganh == 'it') this.hinhanh.it = dulieuanh
    else this.hinhanh.nhieu.push(dulieuanh)
  }

  public chonanh() {
    Camera.pickImages({
      quality: 90,
    }).then(file_uri => {
      this.readAsBase64(file_uri).then((base64: string) => {
        if (this.luonganh == 'it') this.hinhanh.it = base64
        else this.hinhanh.nhieu.push(base64)
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
