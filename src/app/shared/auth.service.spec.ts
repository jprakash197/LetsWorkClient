import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

import { CoreModule } from '../core/core.module';
import { CoreRoutingModule } from '../core/core-routing.module';
import { UpdateProfileComponent } from '../user-profile/update-profile/update-profile.component';
import { AdminComponent } from '../authentication/admin/admin.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [CoreModule, CoreRoutingModule, NgbCarouselModule, MatCardModule, FormsModule, RouterTestingModule],
    declarations: [UpdateProfileComponent, AdminComponent]
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
