import { TestBed } from '@angular/core/testing';

import { LetsWorkServiceService } from './lets-work-service.service';

describe('LetsWorkServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LetsWorkServiceService = TestBed.get(LetsWorkServiceService);
    expect(service).toBeTruthy();
  });
});
