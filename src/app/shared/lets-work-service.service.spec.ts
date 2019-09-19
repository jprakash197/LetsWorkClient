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
});
