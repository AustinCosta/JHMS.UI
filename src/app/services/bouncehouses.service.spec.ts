import { TestBed } from '@angular/core/testing';

import { BouncehousesService } from './bouncehouses.service';

describe('BouncehousesService', () => {
  let service: BouncehousesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BouncehousesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
