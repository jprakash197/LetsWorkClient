import { TestBed } from '@angular/core/testing';

import { GuardUserService } from './guarduser.service';

describe('GuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuardUserService = TestBed.get(GuardUserService);
    expect(service).toBeTruthy();
  });
});
