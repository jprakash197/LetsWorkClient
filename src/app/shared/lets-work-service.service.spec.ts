import { TestBed } from '@angular/core/testing';

import { LetsWorkServiceService } from './lets-work-service.service';
import { HttpClientModule } from '@angular/common/http';

describe('LetsWorkServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: LetsWorkServiceService = TestBed.get(LetsWorkServiceService);
    expect(service).toBeTruthy();
  });

  it('The get user function should be working', () => {
    const service: LetsWorkServiceService = TestBed.get(LetsWorkServiceService);
    expect(service.onSignUp).toBeTruthy();
  });

  it('The post user function should be working', () => {
    const service: LetsWorkServiceService = TestBed.get(LetsWorkServiceService);
    expect(service.OnLogin).toBeTruthy();
  });

  it('The get cities function should be working', () => {
    const service: LetsWorkServiceService = TestBed.get(LetsWorkServiceService);
    expect(service.getCities).toBeTruthy();
  });

  it('The get all venues function should be working', () => {
    const service: LetsWorkServiceService = TestBed.get(LetsWorkServiceService);
    expect(service.getAllVenues).toBeTruthy();
  });

  it('The get get Log Status function should be working', () => {
    const service: LetsWorkServiceService = TestBed.get(LetsWorkServiceService);
    expect(service.getLogStatus).toBeTruthy();
  });
});
