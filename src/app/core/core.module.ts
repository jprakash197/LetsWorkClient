import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { FooterComponent } from './shell/footer/footer.component';
import { ShellComponent } from './shell/shell.component';


@NgModule({
  declarations: [FooterComponent, ShellComponent],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
