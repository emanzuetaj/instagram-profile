import { Injectable, EventEmitter } from '@angular/core';
import * as AppSettings from '../../../appSettings.json';
import { HttpClient } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  displayLoaderEvent$: EventEmitter<boolean>;
  private accessTokenBit: string;
  constructor(public http: HttpClient) {
    this.displayLoaderEvent$ = new EventEmitter<boolean>();
   }
  
  login() {
    const callbackUrl = window.location.origin + '/login';
    const redirectUrl = `${AppSettings.API.authUrl}/authorize/?client_id=${AppSettings.API.clientId}&redirect_uri=${callbackUrl}&response_type=token`;
    window.open(redirectUrl, '_self');
  }
  getProfile(token: string): Observable<any> {
    this.accessTokenBit = token;
    this.displayLoaderEvent$.emit(true);
    const url = `${AppSettings.API.url}/users/self/?${token}`;
    return this.http.get(url).pipe((tap(data => {
      this.displayLoaderEvent$.emit(false);
      console.log(data);  
    })));
  }
}
