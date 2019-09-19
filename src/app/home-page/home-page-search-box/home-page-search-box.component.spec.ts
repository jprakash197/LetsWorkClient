import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageSearchBoxComponent } from './home-page-search-box.component';
import { NgxSpinnerModule, NgxSpinnerService } from '../../../../node_modules/ngx-spinner';
import { ReactiveFormsModule } from '../../../../node_modules/@angular/forms';
import { MatInputModule, MatSelectModule, MatCardModule, MatButtonModule } from '../../../../node_modules/@angular/material';
import { RouterModule } from '../../../../node_modules/@angular/router';
import { HttpClientModule, HttpClient } from '../../../../node_modules/@angular/common/http';
import { RouterTestingModule } from '../../../../node_modules/@angular/router/testing';
import { BrowserAnimationsModule } from '../../../../node_modules/@angular/platform-browser/animations';
import { DatePipe } from '../../../../node_modules/@angular/common';


describe('HomePageSearchBoxComponent', () => {
  let component: HomePageSearchBoxComponent;
  let fixture: ComponentFixture<HomePageSearchBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageSearchBoxComponent],
      imports: [NgxSpinnerModule, ReactiveFormsModule, MatInputModule,
        MatSelectModule,
        MatCardModule,
        MatButtonModule,RouterModule,HttpClientModule,RouterTestingModule,BrowserAnimationsModule],
      providers: [NgxSpinnerService,HttpClient,DatePipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
