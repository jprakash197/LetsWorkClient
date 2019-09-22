import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageSearchBoxComponent } from './home-page-search-box/home-page-search-box.component';
import { FooterComponent } from '../core/shell/footer/footer.component';


const routes: Routes = [
  {
    path:'',component:HomePageSearchBoxComponent,
   
  },
  {
    path:'search',loadChildren: () =>import('../venues/venues.module').then(mod => mod.VenuesModule)
  }
  // {
  //   path:'display',loadChildren:()=>import('../core/core.module').then(mod=>mod.CoreModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
