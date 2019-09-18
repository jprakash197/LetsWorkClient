import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageSearchBoxComponent } from './home-page-search-box.component';
import { HomePageModule } from '../home-page.module';
import { HomePageRoutingModule } from '../home-page-routing.module';
import { AppRoutingModule } from '../../app-routing.module';
import { AppModule } from '../../app.module';

describe('HomePageSearchBoxComponent', () => {
  let component: HomePageSearchBoxComponent;
  let fixture: ComponentFixture<HomePageSearchBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageSearchBoxComponent],
      imports: [HomePageModule, HomePageRoutingModule, AppModule, AppRoutingModule]
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
