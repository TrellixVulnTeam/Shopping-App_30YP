import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

import { ProductService } from 'src/app/services/product.service'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = []
  constructor(private ps: ProductService) { }

  ngOnInit(){
   this.products = this.ps.getProducts()
  }

}
