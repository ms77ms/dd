import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app';
  shouldRender: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    // console.log(this.router.url);
    // console.log(this.router.url.includes('auth'));
  }

  ngDoCheck(): void {
    if (this.router.url.includes('auth')) {
      this.shouldRender = false;
    } else {
      this.shouldRender = true;
    }
    // console.log(this.router.url);
    // console.log(this.router.url.includes('auth'));
  }
}
