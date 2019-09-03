import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './shell/header/header.component';
import { FooterComponent } from './shell/footer/footer.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ShellComponent } from './shell/shell.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, SigninComponent, SignupComponent, AuthenticationComponent, ShellComponent, ResetPasswordComponent, SigninComponent, SignupComponent],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
