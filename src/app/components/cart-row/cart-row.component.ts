import { Component, Input, OnInit } from '@angular/core';
import { OrderDetails } from 'src/app/interfaces/order';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-row',
  templateUrl: './cart-row.component.html',
  styleUrls: ['./cart-row.component.css']
})
export class CartRowComponent implements OnInit {
  @Input() orderDetails: OrderDetails = {} as OrderDetails;
  constructor(private cartService: CartService) { 

  }

  ngOnInit(): void {
  }
  incQuantity(){
  
    this.cartService.incQuantity(this.orderDetails)
  }
  decQuantity(){
   
    this.cartService.decQuantity(this.orderDetails)
  }
  deleteOrder(id:string){
    this.cartService.deleteOrder(id);
  }

}
