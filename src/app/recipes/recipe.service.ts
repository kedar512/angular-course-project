import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    selectedRecipe = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Pizza',
            'This is a delicious pizza',
            'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
            [
                new Ingredient('Jalapino', 6),
                new Ingredient('Tomato Slice', 4),
                new Ingredient('Red Peprika', 5)
            ]
        ),
        new Recipe('Burger',
            'This is a tasty Burger',
            'https://upload.wikimedia.org/wikipedia/commons/7/78/Jumbo_Burger.jpg',
            [
                new Ingredient('Onion Rings', 3),
                new Ingredient('Patty', 1)
            ]
        )
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return [...this.recipes];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}