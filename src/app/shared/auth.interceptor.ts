import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // return next.handle(request);

    const authRequst = request.clone({
      headers: request.headers.set('sampleAuthHeader', 'sample-auth-header').set('header1', 'header-value1')
        .set('header1', 'header-value1')
    })//Adding more headers without overwriting

    const authRequst1= request.clone({
headers: new HttpHeaders({'header11': 'header-value1','header22':'header-value'})
    });//Overwriting all headers
    return next.handle(authRequst); 
  }
}
