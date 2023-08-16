import { Component, Input, OnInit } from '@angular/core';
import { ChungService } from 'src/app/dichvu/chung.service';

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

  ionViewOnEnter() {
    console.log(1);
  }
}
