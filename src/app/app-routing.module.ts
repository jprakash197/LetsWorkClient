import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardService } from './shared/guard.service';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home-page/home-page.module').then(mod => mod.HomePageModule) },
  {
    path: 'getUser/:id',
    loadChildren: () => import('./user-profile/user-profile.module').then(mod => mod.UserProfileModule),
    canActivate: [GuardService]
  },
  {
    path: 'login', loadChildren: () => import('./authentication/authentication.module').then(mod => mod.AuthenticationModule)
  }, {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
