import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { FooterComponent } from './shell/footer/footer.component';
import { ShellComponent } from './shell/shell.component';
import { UpdateProfileComponent } from '../user-profile/update-profile/update-profile.component';
import { AdminComponent } from '../authentication/admin/admin.component';
import { AuthenticationModule } from '../authentication/authentication.module';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [ FooterComponent, ShellComponent, UpdateProfileComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    AuthenticationModule,
    NgxSpinnerModule
  ]
})
export class CoreModule { }
