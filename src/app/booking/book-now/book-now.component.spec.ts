import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookNowComponent } from './book-now.component';
import { FormsModule, FormBuilder } from '../../../../node_modules/@angular/forms';
import { HttpClientModule, HttpClient } from '../../../../node_modules/@angular/common/http';
import { RouterTestingModule } from '../../../../node_modules/@angular/router/testing';
import { SavedcardComponent } from '../savedcard/savedcard.component';
import { CardComponent } from '../card/card.component';
import { Router } from '../../../../node_modules/@angular/router';
import { PaymentService } from '../../shared/payment.service';
import { NgbActiveModal } from '../../../../node_modules/@ng-bootstrap/ng-bootstrap';

describe('BookNowComponent', () => {
  let component: BookNowComponent;
  let fixture: ComponentFixture<BookNowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookNowComponent ],
      imports:[FormsModule,HttpClientModule,RouterTestingModule],
      providers:[HttpClient, SavedcardComponent, CardComponent, PaymentService, NgbActiveModal, FormBuilder]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
