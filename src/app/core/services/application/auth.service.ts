import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { LocalStorageService } from '../helpers/local-storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { cwd } from 'process';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient,
  private localStorage: LocalStorageService, 
  private jwtHelper: JwtHelperService) { }

  public login(username: string, password: string) {
    //here to login
    return this.http.post<any>(`https://localhost:44312/api/Auth/Validate`, { username: username, password: password })
      .pipe(map(user => {
        console.log(user);
        
        if (user && user.token) {
          this.localStorage.setItem('userSession', JSON.stringify(user));
        }
        return user;
      }));
  }

  logout() {
    this.localStorage.removeItem('userSession');
  }
  
  public isAuthenticated(): boolean 
  {
    console.log("here at auth");
    
    var userSession = this.localStorage.getItem('userSession');
    if(userSession == null)
        return false;

    var user = JSON.parse(userSession);
    //check that the token is not expired
    return !this.jwtHelper.isTokenExpired(user.token);
  }
}