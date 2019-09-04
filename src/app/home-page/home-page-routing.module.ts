import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageSearchBoxComponent } from './home-page-search-box/home-page-search-box.component';


const routes: Routes = [
  {
    path:'',component:HomePageSearchBoxComponent
  },
  {
    path:'search',loadChildren: () =>import('../venues/venues.module').then(mod => mod.VenuesModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
