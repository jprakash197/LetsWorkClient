import { TestBed } from '@angular/core/testing';

import { GuardService } from './guard.service';

import { UpdateProfileComponent } from '../user-profile/update-profile/update-profile.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('GuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [FormsModule, RouterTestingModule, HttpClientModule],
    declarations: [UpdateProfileComponent]
  }));

  it('should be created', () => {
    const service: GuardService = TestBed.get(GuardService);
    expect(service).toBeTruthy();
  });
});
