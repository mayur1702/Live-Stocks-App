import { TestBed } from '@angular/core/testing';

import { StockSocketService } from './stock-socket.service';

describe('StockSocketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StockSocketService = TestBed.get(StockSocketService);
    expect(service).toBeTruthy();
  });
});
