import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { LikedService } from 'src/app/services/liked.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  cartCount:Number = 0;
  constructor(public cartService: CartService, public likedService:LikedService) { }

  ngOnInit(): void {

  }

}
