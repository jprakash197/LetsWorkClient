import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageSearchBoxComponent } from './home-page-search-box.component';

describe('HomePageSearchBoxComponent', () => {
  let component: HomePageSearchBoxComponent;
  let fixture: ComponentFixture<HomePageSearchBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageSearchBoxComponent ]
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
