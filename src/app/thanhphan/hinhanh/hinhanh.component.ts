import { Component, Input, OnInit } from '@angular/core';
import { ChungService } from 'src/app/dichvu/chung.service';
import { Camera, CameraResultType, CameraSource, Photo, ImageOptions } from '@capacitor/camera';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-hinhanh',
  templateUrl: './hinhanh.component.html',
  styleUrls: ['./hinhanh.component.scss'],
})
export class HinhanhComponent  implements OnInit {
  @Input() luonganh: string // it, nhieu
  public base64 = ""
  constructor(
    public chung: ChungService,
  ) { }

  ngOnInit() {}

  ionViewOnEnter() {}

  public async chupanh() {
    // Take a photo
    let camermaOptions: ImageOptions = {
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    }

    Camera.getPhoto(camermaOptions).then((imageData) => {
      this.base64 = 'data:image/jpeg;base64,' + imageData;
      // do something
    }, (err) => {
      console.log("failed")
    })
  }

  public chonanh() {
    let imageoption = {
      quality: 100,
      resultType: CameraResultType.Base64
    }

    Camera.pickImages(imageoption).then((imageData) => {
      console.log(imageData);
      
      // reader.readAsDataURL(image); 
      // reader.onloadend = function() {
      //   console.log(reader.result);
      // }
      // do something
    }, (err) => {
      console.log("failed")
    })
  }
}
