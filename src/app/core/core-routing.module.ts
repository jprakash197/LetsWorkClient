import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateProfileComponent } from '../user-profile/update-profile/update-profile.component';
import { GuardService } from '../shared/guard.service';
import { AdminComponent } from '../authentication/admin/admin.component';
import { AuthService } from '../shared/auth.service';


const routes: Routes = [
  { path: 'getUser/:id', component: UpdateProfileComponent, canActivate: [GuardService] },
  { path: 'login/admin/:id', component: AdminComponent, canActivate: [AuthService] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
