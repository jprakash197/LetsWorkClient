import { TestBed } from '@angular/core/testing';

import { UserServiceService } from './user-service.service';
import { CoreModule } from '../core/core.module';
import { CoreRoutingModule } from '../core/core-routing.module';

describe('UserServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [CoreModule, CoreRoutingModule]
  }));

  it('should be created', () => {
    const service: UserServiceService = TestBed.get(UserServiceService);
    expect(service).toBeTruthy();
  });
});
