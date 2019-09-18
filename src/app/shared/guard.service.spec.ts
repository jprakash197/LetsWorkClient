import { TestBed } from '@angular/core/testing';

import { GuardService } from './guard.service';

import { CoreRoutingModule } from '../core/core-routing.module';
import { CoreModule } from '../core/core.module';
import { UpdateProfileComponent } from '../user-profile/update-profile/update-profile.component';

describe('GuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [CoreRoutingModule, CoreModule],
    declarations: [UpdateProfileComponent]
  }));

  it('should be created', () => {
    const service: GuardService = TestBed.get(GuardService);
    expect(service).toBeTruthy();
  });
});
