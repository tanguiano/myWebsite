import { TestBed } from '@angular/core/testing';

import { SecureInnerPagesService } from './secure-inner-pages.service';

describe('SecureInnerPagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SecureInnerPagesService = TestBed.get(SecureInnerPagesService);
    expect(service).toBeTruthy();
  });
});
