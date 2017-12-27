import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { OncokbService } from './oncokb.service';

describe('OncokbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OncokbService],
      imports: [ HttpClientModule ],
    });
  });

  it('should be created', inject([OncokbService], (service: OncokbService) => {
    expect(service).toBeTruthy();
  }));
  
  // @TODO add more 
  
});
