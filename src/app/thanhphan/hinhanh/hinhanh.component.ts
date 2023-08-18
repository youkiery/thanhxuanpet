import { Component, Input, OnInit } from '@angular/core';
import { ChungService } from 'src/app/dichvu/chung.service';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-hinhanh',
  templateUrl: './hinhanh.component.html',
  styleUrls: ['./hinhanh.component.scss'],
})
export class HinhanhComponent  implements OnInit {
  @Input() luonganh: string // it, nhieu
  constructor(
    public chung: ChungService
  ) { }

  ngOnInit() {}

  ionViewOnEnter() {}

  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
  }
}
