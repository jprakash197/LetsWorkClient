import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateProfileComponent } from '../user-profile/update-profile/update-profile.component';


const routes: Routes = [
  { path: 'getUser/Jyoti', component: UpdateProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
