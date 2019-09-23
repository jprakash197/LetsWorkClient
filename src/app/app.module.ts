import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { HeaderComponent } from './core/shell/header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {MatCardModule} from '@angular/material/card';
import { AuthenticationModule } from './authentication/authentication.module';
import { SavedcardComponent } from './booking/savedcard/savedcard.component';
import { CardComponent } from './booking/card/card.component';
import { FormBuilder } from '../../node_modules/@angular/forms';
import { UserProfileModule } from './user-profile/user-profile.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCheckboxModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    MatCardModule,
    AuthenticationModule,
    UserProfileModule
  ],
  // entryComponents: [
  //   SavedcardComponent, CardComponent
  // ],
  providers: [DatePipe, NgbActiveModal, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
