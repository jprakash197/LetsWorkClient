import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

import { CoreModule } from '../core/core.module';
import { CoreRoutingModule } from '../core/core-routing.module';
import { UpdateProfileComponent } from '../user-profile/update-profile/update-profile.component';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [CoreModule, CoreRoutingModule],
    declarations: [UpdateProfileComponent]
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
