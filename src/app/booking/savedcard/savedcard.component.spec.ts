import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedcardComponent } from './savedcard.component';
import { FormsModule, FormGroup, ReactiveFormsModule, FormBuilder } from '../../../../node_modules/@angular/forms';
import { RouterModule, Router } from '../../../../node_modules/@angular/router';
import { NgbActiveModal, NgbModal } from '../../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { RouterTestingModule } from '../../../../node_modules/@angular/router/testing';
import { HttpClient, HttpHandler } from '../../../../node_modules/@angular/common/http';

describe('SavedcardComponent', () => {
  let component: SavedcardComponent;
  let fixture: ComponentFixture<SavedcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SavedcardComponent],
      imports:[FormsModule, RouterModule, ReactiveFormsModule, RouterTestingModule],
      providers:[NgbActiveModal, FormBuilder, NgbModal, HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
