import { TestBed } from '@angular/core/testing';

import { Connection } from './connection.service';

describe('Connection', () => {
  let service: Connection;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Connection);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
