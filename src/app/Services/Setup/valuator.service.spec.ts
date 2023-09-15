import { TestBed } from '@angular/core/testing';

import { ValuatorService } from './valuator.service';

describe('ValuatorService', () => {
  let service: ValuatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValuatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
