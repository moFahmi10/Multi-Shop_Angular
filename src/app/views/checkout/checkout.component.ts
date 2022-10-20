import { Component, OnInit } from '@angular/core';
import { CheckoutOrder } from 'src/app/interfaces/checkout-order';
import { ShippingInfo } from 'src/app/interfaces/shipping-info';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutOrder: CheckoutOrder = {} as CheckoutOrder
  shippingInfo : ShippingInfo = {} as ShippingInfo
  constructor(private cartService:CartService, private authService:AuthService, private checkoutService:CheckoutService) { 
    this.checkoutOrder.sub_total_price = Number(cartService.order.getSubTotal().toFixed(2));
    this.checkoutOrder.shipping = Number(cartService.order.getShipping().toFixed(2));
    this.checkoutOrder.total_price = Number(cartService.order.getTotalPrice().toFixed(2));
    this.checkoutOrder.user_id = authService.getUserId();
    this.checkoutOrder.order_date = String(new Date());
    this.checkoutOrder.order_details = cartService.order;


    this.shippingInfo.first_name = authService.getName();
    this.shippingInfo.last_name = authService.getLastName();
    this.shippingInfo.email = authService.getEmail();

  }

  ngOnInit(): void {
    
  }
  placeOrder(){
    
  this.shippingInfo.mobile_number =  (<HTMLInputElement>document.getElementById('mobile-no')).value
  this.shippingInfo.address1 = (<HTMLInputElement>document.getElementById('addr-1')).value
  this.shippingInfo.address2 =(<HTMLInputElement>document.getElementById('addr-2')).value
  this.shippingInfo.city = (<HTMLInputElement>document.getElementById('city')).value
  this.shippingInfo.country = (<HTMLInputElement>document.getElementById('country')).value
  this.shippingInfo.state = (<HTMLInputElement>document.getElementById('state')).value
  this.shippingInfo.zip_code = (<HTMLInputElement>document.getElementById('zip')).value


    this.checkoutService.placeOrder(this.checkoutOrder,this.shippingInfo).subscribe((res:any)=>{console.log(res)},(err:any)=>{console.log(err)});
  }
  
}
