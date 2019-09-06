import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultsPageComponent } from './results-page/results-page.component';
import { FilterVenuesComponent } from './results-page/filter-venues/filter-venues.component';
import { ReadDetailsComponent } from './details-page/read-details/read-details.component';
import { DetailsPageComponent } from './details-page/details-page.component';


const routes: Routes = [
  {
    path:'',component:ResultsPageComponent,   
     
  },
  {
    path:'detail/:venueId',component:ReadDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VenuesRoutingModule { }
