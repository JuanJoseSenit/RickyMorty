import { TestBed } from '@angular/core/testing';

import { InfoRyMService } from './info-ry-m.service';

describe('InfoRyMService', () => {
  let service: InfoRyMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoRyMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
