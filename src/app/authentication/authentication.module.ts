import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal/ngx-bootstrap-modal';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown/ngx-bootstrap-dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip/ngx-bootstrap-tooltip';

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
  ]
})
export class AuthenticationModule { }
