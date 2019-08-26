import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageSearchBoxComponent } from './home-page-search-box/home-page-search-box.component';


@NgModule({
  declarations: [HomePageSearchBoxComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
