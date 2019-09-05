import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultsPageComponent } from './results-page/results-page.component';
import { FilterVenuesComponent } from './results-page/filter-venues/filter-venues.component';


const routes: Routes = [
  {
    path:'',component:ResultsPageComponent,     
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VenuesRoutingModule { }
