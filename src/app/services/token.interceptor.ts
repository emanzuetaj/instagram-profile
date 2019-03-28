import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { UserService } from './user/user.service';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(public userService: UserService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!this.userService.getToken()) {
            return throwError('token');
        }
        return next.handle(request);   
    }
}