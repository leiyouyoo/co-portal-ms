import { TestBed } from '@angular/core/testing';

import { NetworkContactService } from './network-contact.service';

describe('NetworkContactService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NetworkContactService = TestBed.get(NetworkContactService);
    expect(service).toBeTruthy();
  });
});
