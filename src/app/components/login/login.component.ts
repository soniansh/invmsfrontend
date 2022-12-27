import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginserviceService } from 'src/app/services/login.service';
import { UserAuthService } from 'src/app/services/user-auth.service';

export class User {
  constructor(
    
    public userName: string,
    public userPassword: string
    
  ){

  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isuserLogin=false
  invalidLogin=false
  errorMessage='Invalid Credentials'
  users:User= new User('','');
  constructor(
    private loginService: LoginserviceService,
    private userAuthService: UserAuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    this.loginService.login(this.users).subscribe( (response: any) =>  {
      console.log(response);
      this.invalidLogin=false;
      this.isuserLogin=true;
      this.userAuthService.setRoles(response.user.role);
        this.userAuthService.setToken(response.jwtToken);

        const role = response.user.role[0].roleName;
      this.router.navigate(['/product']).then(() => {
        window.location.reload();
      });
      
    },
      error => {
        console.log(error)
        this.invalidLogin=true;
        this.isuserLogin=false;
      });
   
  }



  onSubmit() {
    this.login();
    
  }



}
