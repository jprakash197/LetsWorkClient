import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { FooterComponent } from './shell/footer/footer.component';
import { ShellComponent } from './shell/shell.component';

import { AdminComponent } from '../authentication/admin/admin.component';
import { AuthenticationModule } from '../authentication/authentication.module';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [ FooterComponent, ShellComponent,],
  imports: [
    CommonModule,
    CoreRoutingModule,
    NgxSpinnerModule
  ],
  exports: [FooterComponent]
})
export class CoreModule { }
