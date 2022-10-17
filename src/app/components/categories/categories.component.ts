import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Array<Category> = []
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
  this.categoryService.getCategories().subscribe((res:any)=>{
    this.categories = res.data;
  },(err:any)=>{console.log(err);})
  }

}
