import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'',loadChildren: () =>import('./home-page/home-page.module').then(mod => mod.HomePageModule)},
  {path:'getUser/Jyoti',loadChildren: () => import('./user-profile/user-profile.module').then(mod => mod.UserProfileModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
