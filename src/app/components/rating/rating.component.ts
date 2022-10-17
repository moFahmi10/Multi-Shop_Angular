import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() rating: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  getRating(i:number): string{
    if(i <= this.rating)
      return "fa fa-star text-primary mr-1";
    else if ( (this.rating < i) && (i < (this.rating + 1)) )
      return "fa fa-star-half-alt text-primary mr-1";
    else
      return "far fa-star text-primary mr-1";  
  }
}
