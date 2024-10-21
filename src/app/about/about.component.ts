import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  id: number = 1;
  name: string = 'ali';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.activatedRoute);//{id:'',name:''}
    console.log(this.activatedRoute.snapshot.params);//{id:'',name:''}
    this.id = this.activatedRoute.snapshot.params['id'];
    this.name = this.activatedRoute.snapshot.params['name'];

    this.activatedRoute.params.subscribe((param) => {
      console.log(param);
      this.id = +param['id'];
      this.name = param['name'];
    });
    this.activatedRoute.queryParams.subscribe((queryParam) => {
      console.log(queryParam);
    })
    this.activatedRoute.fragment.subscribe((f) => {
      console.log(f);

    })
  }


  change() {
    this.router.navigate(['/about', 3, 'yara']);
  }
}
