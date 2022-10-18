import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import { OrderDetails } from 'src/app/interfaces/order';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-shope-detail',
  templateUrl: './shope-detail.component.html',
  styleUrls: ['./shope-detail.component.css']
})
export class ShopeDetailComponent implements OnInit {
  @Input() productId:string = '0';
  product:Product = {} as Product;
  quantity:number = 1;
  featuredProds: Array<Product> = [];
  constructor(private productService:ProductService, private cartService:CartService , private route:ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.productId = params['productId'];
    });

    productService.getFeaturedProducts().subscribe((res:any)=>{
      this.featuredProds = res.data
    },(err:any)=>{console.log(err)});
    
  }

  ngOnInit(): void {
    this.productService.getProductById(this.productId).subscribe((res:any)=>{
      this.product = res.data
    },(err:any)=>{console.log(err)})
    }

  //  runJqueryForCarousel(){
  //   $('.related-carousel').owlCarousel({
  //     loop: true,
  //     margin: 29,
  //     nav: false,
  //     autoplay: true,
  //     smartSpeed: 1000,
  //     responsive: {
  //         0:{
  //             items:1
  //         },
  //         576:{
  //             items:2
  //         },
  //         768:{
  //             items:3
  //         },
  //         992:{
  //             items:4
  //         }
  //     }
  // });
  //  }
  
  incQuantity(){
    this.quantity++;
  }
  decQuantity(){
    if(this.quantity>1) this.quantity--;
  }
  addToCart(){
    for (let i = 0; i< this.quantity;i++)
      this.cartService.addToCart(this.product);
  }

}
