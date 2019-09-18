import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadDetailsComponent } from './read-details.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material';
import { MapComponent } from '../map/map.component';
import { NgbCarousel, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('ReadDetailsComponent', () => {
  let component: ReadDetailsComponent;
  let fixture: ComponentFixture<ReadDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReadDetailsComponent, MapComponent],
      imports: [NgxSpinnerModule, FormsModule, MatCardModule, NgbCarouselModule, RouterTestingModule, HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
