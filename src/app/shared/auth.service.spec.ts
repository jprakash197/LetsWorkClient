import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

import { UpdateProfileComponent } from '../user-profile/update-profile/update-profile.component';
import { AdminComponent } from '../authentication/admin/admin.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [NgbCarouselModule, MatCardModule, HttpClientModule, FormsModule, RouterTestingModule, NgxSpinnerModule],
    declarations: [UpdateProfileComponent, AdminComponent]
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
