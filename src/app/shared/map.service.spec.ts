import { TestBed } from '@angular/core/testing';

import { } from 'googlemaps';

import { MapService } from './map.service';
import { CoreModule } from '../core/core.module';
import { CoreRoutingModule } from '../core/core-routing.module';
import { AppModule } from '../app.module';
import {APP_BASE_HREF} from '@angular/common';

describe('MapService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [AppModule],
    providers: [{provide: APP_BASE_HREF, useValue : '/' }]
  }));

  it('should be created', () => {
    const service: MapService = TestBed.get(MapService);
    expect(service).toBeTruthy();
  });
});
