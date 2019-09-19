import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardService } from './shared/guard.service';
import { FooterComponent } from './core/shell/footer/footer.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home-page/home-page.module').then(mod => mod.HomePageModule) },
  {
    path: 'getUser/:id',
    loadChildren: () => import('./user-profile/user-profile.module').then(mod => mod.UserProfileModule),
    canActivate: [GuardService]
  },
  { path: 'display',
   loadChildren: () => import('../app/core/core.module').then(mod => mod.CoreModule)
  },
  {
    path: 'login', loadChildren: () => import('./authentication/authentication.module').then(mod => mod.AuthenticationModule)
  }, 
  {
    path: '**', redirectTo: ''
  }
  // { path: 'display', loadChildren: () => import('../app/core/core.module').then(mod => mod.CoreModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
