import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../model/recipe';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() //Recieve the input from Parent
  recipe!: Recipe;

  @Output() //Send the event outside and make it listenable
  recipeSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }
  onSelected(){
    this.recipeSelected.emit();
  }
}
