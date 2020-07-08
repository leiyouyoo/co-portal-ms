import { TestBed } from '@angular/core/testing';

import { NetworkLocationService } from './network-location.service';

describe('NetworkLocationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NetworkLocationService = TestBed.get(NetworkLocationService);
    expect(service).toBeTruthy();
  });
});
