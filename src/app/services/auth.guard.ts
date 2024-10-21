import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  if (localStorage.getItem('isLoggedIn') == 'true') {
    return true
  }
  inject(Router).navigate(['/auth/login']);
  return false;


};



