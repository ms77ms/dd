import { ProductsService } from './../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  prodId!: number;
  productDetails: any;
  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
  ) {

  }

  ngOnInit(): void {
    this.prodId = this.activatedRoute.snapshot.queryParams['id'];
    console.log(this.prodId);

    let prds = this.productsService.getProducts();

    let filterPrd = prds.filter((item) => item.id == this.prodId);
    this.productDetails = filterPrd[0];
    console.log(this.productDetails);
  }
}
