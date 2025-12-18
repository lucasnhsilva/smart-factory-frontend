import { TestBed } from '@angular/core/testing';

import { FactoryNodeService } from './factory-node.service';

describe('FactoryNodeService', () => {
  let service: FactoryNodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FactoryNodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
