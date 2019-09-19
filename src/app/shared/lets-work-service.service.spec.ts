import { TestBed } from '@angular/core/testing';

import { LetsWorkServiceService } from './lets-work-service.service';
import { HttpClientModule, HttpClient } from '../../../node_modules/@angular/common/http';

describe('LetsWorkServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [],
    imports: [ HttpClientModule],
    providers: [HttpClient]
  }));



  it('should be created', () => {
    const service: LetsWorkServiceService = TestBed.get(LetsWorkServiceService);
    expect(service).toBeTruthy();
  });
});
