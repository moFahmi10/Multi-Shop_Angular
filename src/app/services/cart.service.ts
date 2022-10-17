import { Injectable } from '@angular/core';
import { Order, OrderDetails } from '../interfaces/order';
import { Product } from '../interfaces/product';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  order: Order
  constructor() {
    this.order = new Order;
    let storedOrderStr = localStorage.getItem('Orders');
    if (storedOrderStr != null) {
       let storedOrder = JSON.parse(storedOrderStr)
       for (let orderdetail of storedOrder.orders){
        for(let i=0; i<orderdetail.quantity;i++)
          this.order.addOrder(orderdetail.product);
      }
      console.log(this.order)  
       };
 
   
   }
   addToCart(product: Product){
    this.order.addOrder(product);
    console.log(this.order);
    localStorage.setItem('Orders', JSON.stringify(this.order));
   }
   incQuantity(orderDetails:OrderDetails){
    orderDetails.incQuantity();
    localStorage.setItem('Orders', JSON.stringify(this.order));
   }
   decQuantity(orderDetails:OrderDetails){
    orderDetails.decQuantity();
    localStorage.setItem('Orders', JSON.stringify(this.order));
   }
   deleteOrder(id:string){
    this.order.orders.forEach((element,index)=>{
      if(element.product._id == id) this.order.orders.splice(index,1);
    })
    localStorage.setItem('Orders', JSON.stringify(this.order));
   }
}
