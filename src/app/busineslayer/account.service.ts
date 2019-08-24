import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient : HttpClient) { }

  getAllAccounts(): Observable<any>{
    return  this.httpClient.get(API_URL + '/accounts');
  }

  postAccount(account){
    return this.httpClient.post(API_URL + '/accounts', account );
  }

}
