import { TestBed } from '@angular/core/testing';

import { JsonWebTokenInterceptorService } from './json-web-token-interceptor.service';

describe('JsonWebTokenInterceptorService', () => {
  let service: JsonWebTokenInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonWebTokenInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
