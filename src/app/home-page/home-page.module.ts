import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageSearchBoxComponent } from './home-page-search-box/home-page-search-box.component';
import { NgxSpinnerModule } from '../../../node_modules/ngx-spinner';
import { FormsModule } from '../../../node_modules/@angular/forms';

@NgModule({
  declarations: [HomePageSearchBoxComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    NgxSpinnerModule,
    FormsModule
  ]
})
export class HomePageModule { }
