import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from 'src/app/services/login.service';
import { UserAuthService } from 'src/app/services/user-auth.service';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  userDisplayName = '';
  userName:any

  
  constructor( public loginService: LoginserviceService,
    private router: Router,
    private userAuthService: UserAuthService,
   
  ) {}

  ngOnInit(): void {
    this.userDisplayName = sessionStorage.getItem('authenticaterUser')
    // console.log(this.userDisplayName)
    // this.userDisplayName = localStorage.getItem('jwtToken.Value')


  }


  // public isLoggedIn() {
  //   return this.userAuthService.isLoggedIn();
  // }
  // alert : boolean=false
  // public userlogout() {
  //   this.alert=true;
  //     this.loginService.logout().subscribe(data => {
      
  //       // this.router.navigate(['/home']);
  //       // console.log(data);
  //       this.goToHomepage();

  //     },
  //       error => console.log(error));
  //   }

  public isNavbarCollapsed = false;

  public isLoggedIn() {
    return this.userAuthService.isLoggedIn();
  }

  public userlogout() {
    this.alert=true;
    this.userAuthService.clear();
    this.router.navigate(['/home']);
  }

  alert : boolean=false

  closeAlert() {

    this.alert=false
    this.goToHomepage();

  }

  goToHomepage(){
    this.router.navigate(['/home']);

  }


  
  // public currentUser() {
 
  //     this.loginService.getCurrentUser(this.c).subscribe(data => {
  //       this.b=data;
  //       // this.router.navigate(['/home']);
  //       console.log(data);

       

  //     },
  //       error => console.log(error));
  //   }
  

}
