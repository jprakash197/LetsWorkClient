import { TestBed } from '@angular/core/testing';

import { PaymentService } from './payment.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('PaymentService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientModule],
    providers:[HttpClient]
  }));

  it('should be created', () => {
    const service: PaymentService = TestBed.get(PaymentService);
    expect(service).toBeTruthy();
  });
});
