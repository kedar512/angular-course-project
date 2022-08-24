import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Test Recipe", "Sample recipe", "https://therecipecritic.com/wp-content/uploads/2019/05/besthomemadepizzahero.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
