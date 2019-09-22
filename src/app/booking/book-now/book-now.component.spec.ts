import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookNowComponent } from './book-now.component';
import { FormsModule } from '../../../../node_modules/@angular/forms';
import { HttpClientModule, HttpClient } from '../../../../node_modules/@angular/common/http';
import { RouterTestingModule } from '../../../../node_modules/@angular/router/testing';
import { SavedcardComponent } from '../savedcard/savedcard.component';

describe('BookNowComponent', () => {
  let component: BookNowComponent;
  let fixture: ComponentFixture<BookNowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookNowComponent ],
      imports:[FormsModule,HttpClientModule,RouterTestingModule,SavedcardComponent],
      providers:[HttpClient]
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
