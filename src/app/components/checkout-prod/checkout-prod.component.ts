import { Component, Input, OnInit } from '@angular/core';
import { OrderDetails } from 'src/app/interfaces/order';

@Component({
  selector: 'app-checkout-prod',
  templateUrl: './checkout-prod.component.html',
  styleUrls: ['./checkout-prod.component.css']
})
export class CheckoutProdComponent implements OnInit {
 @Input() orderDetail : OrderDetails = {} as OrderDetails;
  constructor() { }

  ngOnInit(): void {
  }

}
