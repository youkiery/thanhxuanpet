import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-chonngay',
  templateUrl: './chonngay.component.html',
  styleUrls: ['./chonngay.component.scss'],
})
export class ChonngayComponent {
  @Input() tenbien: string
  @Output() thaydoi = new EventEmitter<any>();
  public dulieu = {}
  constructor() {
    this.dulieu[this.tenbien] = ""
  }

  public chonngay() {
    this.thaydoi.emit(this.dulieu[this.tenbien])
  }
}