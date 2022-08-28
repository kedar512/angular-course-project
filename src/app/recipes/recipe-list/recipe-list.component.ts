import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Pizza', 'This is a delicious pizza', 'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg'),
    new Recipe('Burger', 'This is a tasty Burger', 'https://upload.wikimedia.org/wikipedia/commons/7/78/Jumbo_Burger.jpg')
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
