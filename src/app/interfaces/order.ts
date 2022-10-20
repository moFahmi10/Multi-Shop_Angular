import { Product } from "./product";

export class Order{
orders: Array<OrderDetails>;
constructor(){
    this.orders =  []
}
addOrder(newProduct: Product){
    let currentProduct = this.orders.find(
        (x) => x.product._id == newProduct._id
      );
    if (currentProduct == null) this.orders.push(new OrderDetails(newProduct));
    else  currentProduct.incQuantity();  
}
getSubTotal():number{ 
    let subTotal:number = 0;
    for (let order of this.orders){
        subTotal += order.price*order.quantity; 
    }
    return subTotal;
}
getShipping():number{
    return 0.1*this.getSubTotal();
}
getTotalPrice(){
  return  Number((0.1*this.getSubTotal() + this.getSubTotal()).toFixed(2) )
}


}


export class OrderDetails{
    product: Product;
    quantity: number
    price: number;
    constructor(product:Product){
        this.product = product;
        this.quantity = 1;
        this.price = Number((product.price - product.discount*product.price).toFixed(2));
    }
    addProduct(product:Product){
        this.product;
        this.price = Number((product.price - product.discount*product.price).toFixed(2));
    }
    incQuantity(){
        this.quantity++;

    }

    decQuantity(){
        if (this.quantity > 1) 
            this.quantity--;
    }

}
