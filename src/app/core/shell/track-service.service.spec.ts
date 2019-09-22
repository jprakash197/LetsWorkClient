import { TestBed } from '@angular/core/testing';

import { TrackServiceService } from './track-service.service';
import { HttpClientModule, HttpClient } from '../../../../node_modules/@angular/common/http';

describe('TrackServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientModule],
    providers:[HttpClient]
  }));

  it('should be created', () => {
    const service: TrackServiceService = TestBed.get(TrackServiceService);
    expect(service).toBeTruthy();
  });
});
