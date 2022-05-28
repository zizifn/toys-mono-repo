import { TestBed } from '@angular/core/testing';

import { Hello2Service } from './hello2.service';

describe('Hello2Service', () => {
  let service: Hello2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Hello2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
