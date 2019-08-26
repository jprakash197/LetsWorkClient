import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCurrentBookingsComponent } from './view-current-bookings.component';

describe('ViewCurrentBookingsComponent', () => {
  let component: ViewCurrentBookingsComponent;
  let fixture: ComponentFixture<ViewCurrentBookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCurrentBookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCurrentBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
