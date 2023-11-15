import { TestBed } from '@angular/core/testing';

import { HinhanhService } from './hinhanh.service';

describe('HinhanhService', () => {
  let service: HinhanhService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HinhanhService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
