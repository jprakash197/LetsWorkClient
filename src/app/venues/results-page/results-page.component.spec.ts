import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsPageComponent } from './results-page.component';
import { NgxSpinnerModule, NgxSpinnerService } from '../../../../node_modules/ngx-spinner';
import { RatingModule } from '../../../../node_modules/ng-starrating';
import { MatCheckboxModule, MatSidenavModule } from '../../../../node_modules/@angular/material';
import { RouterTestingModule } from '../../../../node_modules/@angular/router/testing';
import { HttpClientModule, HttpClient } from '../../../../node_modules/@angular/common/http';
import { BrowserAnimationsModule } from '../../../../node_modules/@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatCardModule } from '@angular/material';

describe('ResultsPageComponent', () => {
  let component: ResultsPageComponent;
  let fixture: ComponentFixture<ResultsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResultsPageComponent],
      imports: [NgxSpinnerModule, RatingModule, MatCheckboxModule, MatSidenavModule, NgxSpinnerModule, RouterTestingModule, HttpClientModule, BrowserAnimationsModule],
      providers: [NgxSpinnerService, HttpClient]
    })
      .compileComponents();
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(ResultsPageComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
