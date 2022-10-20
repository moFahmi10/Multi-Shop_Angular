import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CheckoutOrder } from '../interfaces/checkout-order';
import { ShippingInfo } from '../interfaces/shipping-info';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private httpClient:HttpClient, private authService:AuthService) { }

  placeOrder(checkoutOrder:CheckoutOrder, shippingInfo:ShippingInfo){

    let orderDetails = []
    for (let order of checkoutOrder.order_details.orders){
      orderDetails.push({
        product_id: order.product._id,
        price: order.price,
        qty: order.quantity
      });
    }
    return this.httpClient.post(`${environment.APIUrl}orders?token=${this.authService.getToken()}`,{
      sub_total_price: checkoutOrder.sub_total_price ,
      shipping: checkoutOrder.shipping,
      total_price: checkoutOrder.total_price,
      user_id: checkoutOrder.user_id,
      order_date: checkoutOrder.order_date,
      order_details: orderDetails,
      shipping_info: shippingInfo
    })
  }
}
