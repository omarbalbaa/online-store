import { TestBed } from '@angular/core/testing';

import { DetailsGuardGuard } from './details-guard.guard';

describe('DetailsGuardGuard', () => {
  let guard: DetailsGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DetailsGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
