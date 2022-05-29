import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingrediants } from 'src/app/shared/models/ingrediants';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('InputName') NameInputRef!: ElementRef;
@ViewChild('InputAmount') AmountInputRef! : ElementRef;

@Output() ingrediantAdded = new EventEmitter<Ingrediants>();

  constructor() { }

  ngOnInit(): void {
  }
  onAddItem(){
    const ingName = this.NameInputRef.nativeElement.value;
    const ingAmount = this.AmountInputRef.nativeElement.value;
    const newIngrediant = new Ingrediants(ingName, ingAmount);
    this.ingrediantAdded.emit(newIngrediant);
  }
}
