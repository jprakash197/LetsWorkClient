import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterVenuesComponent } from './filter-venues.component';

describe('FilterVenuesComponent', () => {
  let component: FilterVenuesComponent;
  let fixture: ComponentFixture<FilterVenuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterVenuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterVenuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
