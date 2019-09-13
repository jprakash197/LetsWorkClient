import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { GuardService } from './authentication/guard.service';
import { AppComponent } from './app.component';
import { HomePageModule } from './home-page/home-page.module';


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
