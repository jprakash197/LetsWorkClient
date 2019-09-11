import { TestBed } from '@angular/core/testing';

import { GuardRoleService } from './guardrole.service.1';

describe('GuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuardRoleService = TestBed.get(GuardRoleService);
    expect(service).toBeTruthy();
  });
});
