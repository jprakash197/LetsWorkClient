import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageSearchBoxComponent } from './home-page-search-box/home-page-search-box.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatSelectModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from '../core/shell/footer/footer.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [HomePageSearchBoxComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    CoreModule
  ]
})
export class HomePageModule { }
