import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../model/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes : Recipe[] = [
    new Recipe('Test Recipe', 
                'This is spicey',
                'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg'),
                new Recipe('Stake Recipe', 
                'This is an Awesome. Must Try!',
                'https://realfood.tesco.com/media/images/steak-polenta1995-LH-21bde053-a232-4c4d-ac9f-b0fd69aa3232-0-1400x919.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe : Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
