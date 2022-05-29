import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipes : Recipe[] = [
    new Recipe('Test Recipe', 
                'This is spicey',
                'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg'),
                new Recipe('Test Recipe', 
                'This is spicey',
                'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
