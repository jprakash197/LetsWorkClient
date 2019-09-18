import { TestBed } from '@angular/core/testing';

import { UserServiceService } from './user-service.service';

import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('UserServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule, FormsModule, HttpClientModule]
  }));

  it('should be created', () => {
    const service: UserServiceService = TestBed.get(UserServiceService);
    expect(service).toBeTruthy();
  });
});
