import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultsPageComponent } from './results-page/results-page.component';
import { FilterVenuesComponent } from './results-page/filter-venues/filter-venues.component';
import { ReadDetailsComponent } from './details-page/read-details/read-details.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { HomePageModule } from '../home-page/home-page.module';
// import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [
  {
    path: '', component: ResultsPageComponent
  },
  {                                                                                      
    path: 'detail/:venueId', component: ReadDetailsComponent
  },
  {
    path: 'detail/:venueId/book', loadChildren: () => import('../booking/booking.module').then(mod=>mod.BookingModule)
  },
  {
    path: 'detail/:venueId/login', loadChildren:() => import('../authentication/authentication.module').then(mod=>mod.AuthenticationModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  // providers: [{provide: APP_BASE_HREF, useValue: '/my/app'}]
})
export class VenuesRoutingModule { }
