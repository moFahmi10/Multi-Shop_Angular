import {Order} from './order'
export interface CheckoutOrder{
    sub_total_price: number,
    shipping: number,
    total_price: number,
    user_id: string,
    order_date: string,
    order_details: Order,

}