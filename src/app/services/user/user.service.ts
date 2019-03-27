import { Injectable } from '@angular/core';
import * as AppSettings from '../../../appSettings.json';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  
  login() {
    let redirectUrl = window.location.origin + '/login';
    window.open(`https://api.instagram.com/oauth/authorize/?client_id=${AppSettings.API.clientId}&redirect_uri=${redirectUrl}&response_type=code`, '_self');
  }
}
