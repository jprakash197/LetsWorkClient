import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsPageComponent } from './results-page.component';
import { AppModule } from '../../app.module';
import { AppRoutingModule } from '../../app-routing.module';

describe('ResultsPageComponent', () => {
  let component: ResultsPageComponent;
  let fixture: ComponentFixture<ResultsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResultsPageComponent],
      imports: [AppModule, AppRoutingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
