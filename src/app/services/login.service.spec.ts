import { TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';

import { LoginserviceService } from './login.service';

describe('LoginService', () => {
  let service: LoginserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({      imports: [AppModule]
    });
    service = TestBed.inject(LoginserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
