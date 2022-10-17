import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class LikedService {
  products: Array<Product> = []
  constructor() {
    let storedLikedStr = localStorage.getItem("Liked");
    if (storedLikedStr != null) {
      let storedLiked = JSON.parse(storedLikedStr)
      this.products = storedLiked;
    }
   }

  addToLiked(product:Product){
    for(let element of this.products){
      if(element._id == product._id)
      return;
    }
    this.products.push(product);
    localStorage.setItem("Liked",JSON.stringify(this.products));
  }
}
