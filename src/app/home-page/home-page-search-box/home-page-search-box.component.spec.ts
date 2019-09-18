import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageSearchBoxComponent } from './home-page-search-box.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatInputModule, MatSelectModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

describe('HomePageSearchBoxComponent', () => {
  let component: HomePageSearchBoxComponent;
  let fixture: ComponentFixture<HomePageSearchBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageSearchBoxComponent],
      imports: [NgxSpinnerModule, MatInputModule, MatSelectModule, MatCardModule, MatButtonModule]
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
