import { TestBed } from '@angular/core/testing';

import { LetsWorkServiceService } from './lets-work-service.service';
import { HeaderComponent } from '../core/shell/header/header.component';

describe('LetsWorkServiceService', () => {
  let fixture = TestBed.createComponent(HeaderComponent);
  let app = fixture.debugElement.componentInstance;
  expect(app).toBeTruthy();


  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     providers: [LetsWorkServiceService]
  //   });

  //   this.lwService = TestBed.get(LetsWorkServiceService);
  // });

  // it('should be created', () => {
  //   expect(this.lwService).toBeTruthy();
  // });

  // it('should return a list of Venues', () => {
  //   const service: LetsWorkServiceService = TestBed.get(LetsWorkServiceService);
  //   expect(service.getAllVenues).toBeGreaterThan(0);
  // });
});
