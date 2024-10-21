import { AuthService } from './../../../../services/auth.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
    constructor(
      private authService: AuthService,
      private router: Router,
      private fb: FormBuilder
    ) { }
  
    submit(formValue: NgForm) {
      this.authService.isLoggedIn = true;
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/auth']);
  }
  
}
