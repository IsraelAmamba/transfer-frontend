import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { LocalStorageService } from '../helpers/local-storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '@environments/environment';
import { User } from '../../models/user';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class AuthService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;
  
  constructor(private http: HttpClient,
  private localStorage: LocalStorageService, 
  private jwtHelper: JwtHelperService,
  ){ 
    this.userSubject = new BehaviorSubject<User>(null);
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
    }

  public login(username: string, password: string) {
    //here to login
    return this.http.post<any>(`${environment.apiUrl}/auth/generate-token`, { username: username, password: password })
      .pipe(map(res => {      
        if(res && res.responseData)
        {      
          var user = res.responseData[0];
          this.localStorage.setItem('userSession', JSON.stringify(user));  
          console.log(user);
        }  
        return res;
      }));
  }
  
  logout() {
    this.localStorage.removeItem('userSession');    
  }
  
  public isAuthenticated(): boolean 
  {    
    var userSession = this.localStorage.getItem('userSession');
    if(userSession == null)
        return false;

    var user = JSON.parse(userSession);
    //check that the token is not expired
    return !this.jwtHelper.isTokenExpired(user.token);
  }

  refreshToken() {
    return this.http.post<any>(`${environment.apiUrl}/auth/refresh-token`, {}, { withCredentials: true })
        .pipe(map((res) => {           
            return res;
        }));
  }
}