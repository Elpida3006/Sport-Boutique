import { TestBed } from '@angular/core/testing';

import { PlatformStorageService } from './platform-storage.service';

describe('PlatformStorageService', () => {
  let service: PlatformStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatformStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
