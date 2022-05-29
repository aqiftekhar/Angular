import { Component, OnInit } from '@angular/core';
import { Ingrediants } from 'src/app/shared/models/ingrediants';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingrediants : Ingrediants[] = [
  new Ingrediants('Apples', 5),
  new Ingrediants('Orrange', 10)
]
  constructor() { }

  ngOnInit(): void {
  }

}
