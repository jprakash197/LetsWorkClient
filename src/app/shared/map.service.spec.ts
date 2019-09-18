import { TestBed } from '@angular/core/testing';

import { } from 'googlemaps';

import { MapService } from './map.service';
import { CoreModule } from '../core/core.module';
import { CoreRoutingModule } from '../core/core-routing.module';

describe('MapService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [CoreModule, CoreRoutingModule]
  }));

  it('should be created', () => {
    const service: MapService = TestBed.get(MapService);
    expect(service).toBeTruthy();
  });
});
