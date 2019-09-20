import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule ,ReactiveFormsModule}   from '@angular/forms';

import { VenuesRoutingModule } from './venues-routing.module';
import { ResultsPageComponent } from './results-page/results-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { BookNowComponent } from './details-page/book-now/book-now.component';
import { ReadDetailsComponent } from './details-page/read-details/read-details.component';
import { FilterVenuesComponent } from './results-page/filter-venues/filter-venues.component';
import { SortVenuesComponent } from './results-page/sort-venues/sort-venues.component';
import { GetMoreDetailsComponent } from './results-page/get-more-details/get-more-details.component';
import { MapComponent } from './details-page/map/map.component';
import { RatingModule } from 'ng-starrating';


@NgModule({
  declarations: [ResultsPageComponent, DetailsPageComponent, BookNowComponent, ReadDetailsComponent, FilterVenuesComponent, SortVenuesComponent, GetMoreDetailsComponent, MapComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    NgxSpinnerModule,
    MatCheckboxModule,
    VenuesRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    RatingModule
  ],
  providers: [
    ResultsPageComponent
  ]
})
export class VenuesModule { }
