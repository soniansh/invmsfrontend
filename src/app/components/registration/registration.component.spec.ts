import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { registrationComponent } from './registration.component';
import {HttpClientModule} from '@angular/common/http';
import { Router } from '@angular/router';
import { AppModule } from '../../app.module';


describe('registrationComponent', () => {
  let component: registrationComponent;
  let fixture: ComponentFixture<registrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ registrationComponent ],
      imports: [AppModule]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(registrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
