import { TestBed } from '@angular/core/testing';

import { ChungService } from './chung.service';

describe('ChungService', () => {
  let service: ChungService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChungService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
