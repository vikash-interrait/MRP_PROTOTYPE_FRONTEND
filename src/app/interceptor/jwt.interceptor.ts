import { inject, Injectable } from '@angular/core';
import {HttpRequest,HttpHandler,HttpEvent,HttpInterceptor,} from '@angular/common/http';
import { Observable } from 'rxjs';

import { TokenManagerService } from '../services/token-manager.service';
import { environment } from '../../environments/environment.development';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    private tokenManagerService = inject(TokenManagerService)

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const isApiUrl = request.url.startsWith(`${environment.API}`);
    const currentUser = this.tokenManagerService.currentUser;

    if (isApiUrl && currentUser!=null) {
      const token = this.tokenManagerService.getAccesToken();
      request = request.clone({
        setHeaders: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
      });
    }else if(isApiUrl){
      request = request.clone({
        setHeaders: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
      });
    }
    return next.handle(request);
  }
}
