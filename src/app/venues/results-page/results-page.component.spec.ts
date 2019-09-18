import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsPageComponent } from './results-page.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatFormFieldModule, MatCardModule } from '@angular/material';

describe('ResultsPageComponent', () => {
  let component: ResultsPageComponent;
  let fixture: ComponentFixture<ResultsPageComponent>;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ResultsPageComponent],
  //     imports: [HttpClientModule, RouterTestingModule, FormsModule, NgxSpinnerModule, MatFormFieldModule, MatCardModule]
  //   })
  //     .compileComponents();
  // }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(ResultsPageComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
