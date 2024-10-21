import { AuthService } from './../../../../services/auth.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  // @ViewChild('loginForm') login!: ElementRef;
  // @ViewChild('loginForm') login!: HTMLFormElement;
  // @ViewChild('loginForm') login!: NgForm;

  //   loginForm = this.fb.group({
  //     username: ['', Validators.required, Validators.pattern()]
  // email:
  //       password:
  //   })
  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) { }



  submit(formValue: NgForm) {
    this.authService.isLoggedIn = true;
    localStorage.setItem('isLoggedIn', 'true');
  
    this.router.navigate(['/home']);
 
  }
}
