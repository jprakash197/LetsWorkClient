import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material';
import { NgxSpinnerModule } from '../../../node_modules/ngx-spinner';

import { VenuesRoutingModule } from './venues-routing.module';
import { ResultsPageComponent } from './results-page/results-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { BookNowComponent } from '../venues/details-page/book-now/book-now.component';
import { ReadDetailsComponent } from '../venues/details-page/read-details/read-details.component';
import { FilterVenuesComponent } from '../venues/results-page/filter-venues/filter-venues.component';
import { SortVenuesComponent } from '../venues/results-page/sort-venues/sort-venues.component';
import { GetMoreDetailsComponent } from '../venues/results-page/get-more-details/get-more-details.component';
import { MapComponent } from '../venues/details-page/map/map.component';


@NgModule({
  declarations: [ResultsPageComponent, DetailsPageComponent, BookNowComponent, ReadDetailsComponent, FilterVenuesComponent, SortVenuesComponent, GetMoreDetailsComponent, MapComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    NgxSpinnerModule,
    MatCheckboxModule,
    VenuesRoutingModule
  ],
  providers:[
    ResultsPageComponent
  ]
})
export class VenuesModule { }
