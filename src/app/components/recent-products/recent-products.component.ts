import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-recent-products',
  templateUrl: './recent-products.component.html',
  styleUrls: ['./recent-products.component.css']
})
export class RecentProductsComponent implements OnInit {
  products: Array<Product> = [] 
  constructor(private ProductService: ProductService) {
    
   }

  ngOnInit(): void {
     this.ProductService.getAllProducts().subscribe((res:any)=>{
      let recentProds:Array<Product> = [];
      
      for (let obj of res.data){
        if(obj.is_recent) recentProds.push(obj);
      }
      this.products = recentProds;
      },(err:any)=>{console.log(err);});
  }

}
