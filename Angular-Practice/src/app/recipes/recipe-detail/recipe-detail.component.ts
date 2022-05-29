import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
@Input() //This will recieve recipe as an input from recipe component
 recipe! : Recipe;

  constructor() { }

  ngOnInit(): void {
  }

}
