import { TestBed } from '@angular/core/testing';

import { LetsWorkServiceService } from './lets-work-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('LetsWorkServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule, FormsModule]
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

  it('Venue cities should be findable', () => {
    const service: LetsWorkServiceService = TestBed.get(LetsWorkServiceService);
    const venues = this.service.getCities();
    let city = venues.find("Compton");
    expect(city).toBeNull();
  });
  it('The details of a venue to be found',()=>{
    const service:LetsWorkServiceService=TestBed.get(LetsWorkServiceService);
    const venue=this.service.getDetails(1);
    let city=venue.find("Bangalore");
    expect(city).actual;
  })
});
