import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { LocalStorageService } from '../helpers/local-storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '@environments/environment';

@Injectable()
export class AccountService {
  
  constructor(private http: HttpClient,
    private localStorage: LocalStorageService
  ){ }


  public getAccounts() {
    //get the userId of this customer
    let user = JSON.parse(this.localStorage.getItem('userSession'));    
    return this.http.get<any>(`${environment.apiUrl}/accounts?customerId=${user.id}`)
      .pipe(map(res => {      
          return res;
      }));
  }

  public postTransaction(requestData : any) {
    //get the userId of this customer
    let user = JSON.parse(this.localStorage.getItem('userSession'));    
    requestData.initiatorId = user.id; //append the initiators id
    var requestArray = [];
    requestArray[requestArray.length] = requestData

    return this.http.post<any>(`${environment.apiUrl}/transfer-own/savingToCurrent`, requestArray)
      .pipe(map(res => {      
          return res;
      }));
  }

}