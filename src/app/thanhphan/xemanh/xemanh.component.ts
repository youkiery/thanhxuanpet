import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-xemanh',
  templateUrl: './xemanh.component.html',
  styleUrls: ['./xemanh.component.scss'],
})
export class XemanhComponent {
  public hinhanh: string
  public dulieuanh: string
  public dulieugoc: string
  public chieucaogoc: number
  public chieuronggoc: number
  public vitrix: number = 0
  public vitriy: number = 0
  public tile: number = 5 // mặc định là 5, tile = 1 => 1/5
  public keotha: any
  public batdaukeo: any
  public kethuckeo: any
  @ViewChild('canvas') canvasElement: any;
  canvas: any;
  constructor(
    public modalCtrl: ModalController
  ) { }

  ngAfterViewInit() {
    this.canvas = this.canvasElement.nativeElement;
    this.canvas.addEventListener('mousedown', (event) => {
      this.batdaukeo = {
        x: event.pageX - this.canvas.offsetLeft,
        y: event.pageY - this.canvas.offsetTop
      }
      this.keotha = true;
    })

    this.canvas.addEventListener('touchstart', (event) => {
      this.batdaukeo = {
        x: event.touches[0].clientX - this.canvas.offsetLeft,
        y: event.touches[0].clientY - this.canvas.offsetTop
      }
      this.keotha = true;
    })

    this.canvas.addEventListener('mousemove', (event) => {
      if (this.keotha) {
        this.kethuckeo = {
          x: event.pageX - this.canvas.offsetLeft,
          y: event.pageY - this.canvas.offsetTop
        }
        this.vitrix = this.kethuckeo.x - this.batdaukeo.x
        this.vitriy = this.kethuckeo.y - this.batdaukeo.y
        this.zoom(0)
      }
    })

    this.canvas.addEventListener('touchmove', (event) => {
      if (this.keotha) {
        this.kethuckeo = {
          x: event.touches[0].clientX - this.canvas.offsetLeft,
          y: event.touches[0].clientY - this.canvas.offsetTop
        }
        this.vitrix = this.kethuckeo.x - this.batdaukeo.x
        this.vitriy = this.kethuckeo.y - this.batdaukeo.y
        this.zoom(0)
      }
    })

    this.canvas.addEventListener('mouseup', (event) => {
      this.keotha = false;
    })

    this.canvas.addEventListener('touchend', (event) => {
      this.keotha = false;
    })
    this.zoom(0)
  }

  public zoom(hesozoom: number) {
    this.tile += hesozoom
    if (this.tile <= 0) this.tile = 1
    let image = new Image();
    image.src = this.hinhanh
    image.onload = () => {
      if (!hesozoom) {
        this.chieuronggoc = image.width
        this.chieucaogoc = image.height
        this.canvas.width = this.chieuronggoc
        this.canvas.height = this.chieucaogoc
      }
      let context = this.canvas.getContext('2d')
      context.fillStyle = "white";
      context.fillRect(0, 0, this.chieuronggoc, this.chieucaogoc);
      context.drawImage(image, this.vitrix * this.tile / 5, this.vitriy * this.tile / 5, this.chieuronggoc * this.tile / 5, this.chieucaogoc * this.tile / 5)
      this.dulieugoc = this.canvas.toDataURL('image/jpeg');
    }
  }
}
