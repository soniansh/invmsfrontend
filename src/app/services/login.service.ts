import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

    private PATH_OF_API = "http://localhost:8080";

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  constructor(
    private httpclient: HttpClient,
    private userAuthService: UserAuthService,
    private router: Router,

  ) {}

  public login(loginData) {
    return this.httpclient.post(this.PATH_OF_API + '/authenticate', loginData, {
      headers: this.requestHeader,
    });
  }

  public forUser() {
    return this.httpclient.get(this.PATH_OF_API + '/forUser', {
      responseType: 'text',
    });
  }


  public forAdmin() {
    return this.httpclient.get(this.PATH_OF_API + '/forAdmin', {
      responseType: 'text',
    }); 
  }
   
  public registration(data) {
    return this.httpclient.post(this.PATH_OF_API+'/registerNewUser',data,{
      headers: this.requestHeader,

    });
  }



  public roleMatch(allowedRoles): boolean {
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();

    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          } else {
            return isMatch;
          }
        }
      }
    }
  }

  isUserLoggedIn(){
    return this.userAuthService.isLoggedIn();

      // let user=sessionStorage.getItem('authenticaterUser');
      // console.log(sessionStorage.getItem('authenticaterUser'))
      // return !(user===null)
    }

     

  // private baseURL = "http://localhost:8080/";
  
  // success: any;
  // constructor(private httpClient: HttpClient) { }



  // addUser(user ): Observable<Object>{
  //   return this.httpClient.post(`${this.baseURL}/Registration`, user);
  // }

  // login(user ): Observable<Object>{
  //   return this.httpClient.post(`${this.baseURL}/login`,
  //     user
      
  //   ).pipe(
  //     map(
  //       data => {
  //         sessionStorage.setItem('authenticaterUser', user.email);
  //         return data;
  //       }
  //     )
  //   );
  // }

  // isUserLoggedIn(){
  //   let user=sessionStorage.getItem('authenticaterUser');
  //   // console.log(sessionStorage.getItem('authenticaterUser'))
  //   return !(user===null)
  // }

  // logout(): Observable<Object>{
  //   sessionStorage.removeItem('authenticaterUser');
  //   return this.httpClient.get(`${this.baseURL}/logout`,{responseType: 'text'})
  // }



  

  




}
 