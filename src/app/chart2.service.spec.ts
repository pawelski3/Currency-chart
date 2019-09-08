import { TestBed } from '@angular/core/testing';

import { Chart2Service } from './chart2.service';

describe('Chart2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Chart2Service = TestBed.get(Chart2Service);
    expect(service).toBeTruthy();
  });
});
