import { TestBed } from '@angular/core/testing';

import { EmpHttpServiceService } from './emp-http-service.service';

describe('EmpHttpServiceService', () => {
  let service: EmpHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
