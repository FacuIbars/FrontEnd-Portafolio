import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppService } from "./app.service";






@Injectable()
export class InterceptorService implements HttpInterceptor{
    constructor(
        private Api:AppService
         ) {}

         
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        const token = this.Api.getToken();
        if (token)
       {
        const cloned = request.clone({
            headers: request.headers.set('Authorization', `Bearer ${token}` )
        })
        return next.handle(cloned);
       }
  return next.handle(request);      

} 
}