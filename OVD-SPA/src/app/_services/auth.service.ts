import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.apiURL + 'auth/';
  jwtHelper = new JwtHelperService();
  decodedToken: any;

constructor(private http: HttpClient) { }

login(model: any) {
  // Call the api to log in with passed credentials
  /*
  return this.http.post(this.baseUrl + 'login', model).pipe(
    // Grab the token that was returned if the login was successful
    map((response: any) => {
      const user = response;
      // If there was a token, save it and decode it
      if (user) {
        localStorage.setItem('token', user.token);
        this.decodedToken = this.jwtHelper.decodeToken(user.token);
      }
    })
  ); */
  return true;
}

loggedIn() {
  /*
  const token = localStorage.getItem('token');
  return !this.jwtHelper.isTokenExpired(token); */
  return true;
}

isAdmin() {
  /* We had to kill the EF database
  if (this.loggedIn()) {
    if (this.decodedToken && this.decodedToken.role === 'admin') {
      return true;
    }
  }
  return false; */
  return true;
}

logout() {
  localStorage.removeItem('token');
}


}
