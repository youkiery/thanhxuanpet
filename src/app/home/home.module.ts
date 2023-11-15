import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HinhanhComponent } from '../thanhphan/hinhanh/hinhanh.component';
import { ChonngayComponent } from '../thanhphan/chonngay/chonngay.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [
    HomePage,
    HinhanhComponent,
    ChonngayComponent
  ]
})
export class HomePageModule {}
