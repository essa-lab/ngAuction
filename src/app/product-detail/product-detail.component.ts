import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductService } from '../shared/product.service';

@Component({
  selector: 'nga-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
product:Product|undefined;
constructor(private route:ActivatedRoute,private productService:ProductService){}
ngOnInit(){
  const productId :number=parseInt(this.route.snapshot.params['id']);
  this.product = this.productService.getProductByID(productId); 
}
}
