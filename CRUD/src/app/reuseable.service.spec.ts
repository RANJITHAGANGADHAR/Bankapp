import { TestBed } from '@angular/core/testing';

import { ReuseableService } from './reuseable.service';

describe('ReuseableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReuseableService = TestBed.get(ReuseableService);
    expect(service).toBeTruthy();
  });
});
