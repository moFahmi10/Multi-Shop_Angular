import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Array<Product> =[]

  constructor(private productService:ProductService) { 
   
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((res: any)=>{
      let featuredProds:Array<Product> = [];
      
      for (let obj of res.data){
        if(obj.is_featured) featuredProds.push(obj);
      }
      this.products = featuredProds;
    },
    (err: any)=>{
      console.log(err);
    })
  }

}
