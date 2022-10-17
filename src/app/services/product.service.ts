import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Order } from '../interfaces/order';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
 
  constructor(private httpClient: HttpClient) { }

  getAllProducts(){
    return this.httpClient.get(`${environment.APIUrl}products/`)
  }
  getFeaturedProducts(){
    return this.httpClient.get(`${environment.APIUrl}products/getFeatured/`)
  }



  // getRecentProducts():Array<Product>{
  //   let recentProducts: Array<Product> = [];
  //   let storedOrderStr = localStorage.getItem('Orders');
  //   if(storedOrderStr != null) {
  //     let storedOrder = JSON.parse(storedOrderStr)
  //     //returns only last 2 recent products
  //     let i = 2;
  //     for(let orderdetail of storedOrder.orders){
  //       recentProducts.push(orderdetail.product);
  //       i--;
  //       if(i==0) break;
  //     }
  //   };
  // return recentProducts;
  //}

}
