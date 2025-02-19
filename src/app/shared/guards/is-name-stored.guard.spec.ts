import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isNameStoredGuard } from './is-name-stored.guard';

describe('isNameStoredGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isNameStoredGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
