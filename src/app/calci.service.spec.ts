import { TestBed, inject } from '@angular/core/testing';

import { CalciService } from './calci.service';

describe('CalciService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalciService]
    });
  });

  it('should be created', inject([CalciService], (service: CalciService) => {
    expect(service).toBeTruthy();
  }));
});
