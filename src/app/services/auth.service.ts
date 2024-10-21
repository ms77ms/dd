import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;
  constructor(
    private router: Router
  ) { }

  isAuthentication(): boolean {
    if (localStorage.getItem('isLoggedIn') == 'true') {
      return true;
    }
    this.router.navigate(['/auth/login']);
    return false;
  }
}
