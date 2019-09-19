import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule } from '@angular/material/card';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [LoginComponent, SignupComponent, AdminComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    NgbModule,
    MatCardModule,
    NgxSpinnerModule
  ]
})
export class AuthenticationModule { }
