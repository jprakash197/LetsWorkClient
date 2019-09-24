import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateProfileComponent } from '../user-profile/update-profile/update-profile.component';
import { GuardService } from '../shared/guard.service';
import { AdminComponent } from '../authentication/admin/admin.component';

import { FooterComponent } from './shell/footer/footer.component';


const routes: Routes = [
  { path: 'getUser/:id', component: UpdateProfileComponent, canActivate: [GuardService] },
  { path: 'login/admin/:id', component: AdminComponent, canActivate: [GuardService] },
  // { path: 'display', component: FooterComponent},
  { path: '', component: FooterComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
