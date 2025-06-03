import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

import { TokenManagerService } from '../services/token-manager.service';


export const authenticationGuard: CanActivateFn = (route, state) => {

  const token = inject(TokenManagerService)
  const router : Router = inject(Router)


  if( !token.isLoggedIn ){
    return router.navigate(['/login'])
  }

  return true;
};
