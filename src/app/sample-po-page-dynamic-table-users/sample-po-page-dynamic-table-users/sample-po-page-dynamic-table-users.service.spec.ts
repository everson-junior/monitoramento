import { TestBed } from '@angular/core/testing';

import { SamplePoPageDynamicTableUsersService } from './sample-po-page-dynamic-table-users.service';

describe('SamplePoPageDynamicTableUsersService', () => {
  let service: SamplePoPageDynamicTableUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SamplePoPageDynamicTableUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
