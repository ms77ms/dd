import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(
    private router: Router
  ) { }

  goToAbout() {
    this.router.navigate(['/about', 1, 'ali'],
      {
        queryParams: { allow: true, id: 1 },
        fragment: 'edit'
      }
    );
  }
}
