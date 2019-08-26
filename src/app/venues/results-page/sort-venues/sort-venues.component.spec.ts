import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortVenuesComponent } from './sort-venues.component';

describe('SortVenuesComponent', () => {
  let component: SortVenuesComponent;
  let fixture: ComponentFixture<SortVenuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortVenuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortVenuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
