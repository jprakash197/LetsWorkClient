import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { FooterComponent } from '../core/shell/footer/footer.component';
import { SigninComponent } from '../core/authentication/signin/signin.component';
import { SignupComponent } from '../core/authentication/signup/signup.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ShellComponent } from './shell/shell.component';
import { ResetPasswordComponent } from '../core/authentication/reset-password/reset-password.component';


@NgModule({
  declarations: [FooterComponent, SigninComponent, SignupComponent, AuthenticationComponent, ShellComponent, ResetPasswordComponent, SigninComponent, SignupComponent],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
