import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginserviceService } from '../../services/login.service';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { AppUser } from 'src/app/models/AppUser';


interface Rol{
   value : string;
   viewValue: string;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class registrationComponent implements OnInit {
  Roles: Rol[] = [{ value: 'USER', viewValue: 'USER' }
                  ];

                  alert: boolean = false

  appUser: AppUser = new AppUser();

  constructor(
    private loginService: LoginserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    

  }
  register() {
    this.loginService.registration(this.appUser).subscribe(
      (data) => {
        console.log(data)
        this.router.navigate(['/login']);
      },
      (error) => {
        console.log(error);
      }
    )
  
  }

  public AppUser = new FormGroup({
    userPassword: new FormControl('', [Validators.required,
    Validators.minLength(6),
    Validators.maxLength(8)]),
    userName: new FormControl('', Validators.required),
    userFirstName: new FormControl('', Validators.required),
    userLastName:new FormControl('', Validators.required)
    })

  get userPassword() {
    return this.AppUser.get('userPassword');
  }

  get userName() {
    return this.AppUser.get('userName');
  }

  get userFirstName() {
    return this.AppUser.get('productTag');
  }

  get userLastName() {
    return this.AppUser.get('productTag');
  }

  onSubmit() {
    // console.log(this.product);
    this.register();
    this.alert = true
    // this.goToProductList();
    // this.Product.reset();
  }

  closeAlert() {
    this.alert = false
  }


  // registration(registerForm: NgForm) {
  //   this.loginService.addUser(registerForm.value).subscribe(
  //     (data) => {
  //       console.log(data)
  //       this.router.navigate(['/login']);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   )
   
  // }
}
