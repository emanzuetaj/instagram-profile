import { Injectable, EventEmitter } from '@angular/core';
import { AppSettings } from '../../../appSettings';
import { HttpClient } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { tap, catchError, map, finalize } from 'rxjs/operators';

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
    const redirectUrl = `${AppSettings.authUrl}/authorize/?client_id=${AppSettings.clientId}&redirect_uri=${callbackUrl}&response_type=token`;
    window.open(redirectUrl, '_self');
  }
  getProfile(token: string = this.accessTokenBit): Observable<any> {
    this.accessTokenBit = token;
    const url = `${AppSettings.url}/users/self/?${token}`;
    this.displayLoaderEvent$.emit(true);
    return this.http.get(url).pipe(map((data: any) => {
      return data.data;
    }), tap(data => {
     console.log(data);
    }), catchError((error) => {
      throw error;
    }), finalize(() => {
      this.displayLoaderEvent$.emit(false);
    }));
  }
  getRecentMedia(token: string = this.accessTokenBit): Observable<any> {
    this.accessTokenBit = token;
    const url = `${AppSettings.url}/users/self/media/recent/?${token}`;
    return this.http.get(url).pipe(map((data: any) => {
     return data.data; 
    }), tap(data => {
     console.log(data);
    }),catchError((error) => {
      throw error;
    }));
  }
  setToken(token: string): void {
    this.accessTokenBit = token;
  }
  getToken(): string {
    return this.accessTokenBit || null;
  }
}
