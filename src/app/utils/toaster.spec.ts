import { TestBed, inject } from '@angular/core/testing';

import { Toaster } from './toaster';

describe('ToasterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Toaster]
    });
  });

  it('should be created', inject([Toaster], (service: Toaster) => {
    expect(service).toBeTruthy();
  }));
});
