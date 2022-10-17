import { Component, Input, OnInit } from '@angular/core';
import { OrderDetails } from 'src/app/interfaces/order';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { LikedService } from 'src/app/services/liked.service';

@Component({
  selector: '.app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product = {} as Product
  constructor(private cartService: CartService, private likedService:LikedService ) { }

  ngOnInit(): void {
  }
  addToCart(){
    this.cartService.addToCart(this.product); 
  }
  addToLiked(){
    this.likedService.addToLiked(this.product);
  }

}
