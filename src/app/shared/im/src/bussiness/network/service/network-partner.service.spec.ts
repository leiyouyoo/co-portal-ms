import { TestBed } from '@angular/core/testing';

import { NetworkPartnerService } from './network-partner.service';

describe('NetworkPartnerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NetworkPartnerService = TestBed.get(NetworkPartnerService);
    expect(service).toBeTruthy();
  });
});
