import {Component, OnInit} from '@angular/core';
import {RecipeForm} from './RecipeForm';
import {PrologService} from '../../prolog/prolog.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent implements OnInit {
  recipe = new RecipeForm();
  optional = false;
  ingredients = [];
  optionalIngredients = [];

  constructor(
    private router: Router,
    private prologService: PrologService
  ) {
  }

  ngOnInit(): void {
  }

  toggleOptionalIngredients(): void {
    this.optional = true;
  }

  save(): void {
    const name = this.recipe.name.trim().replace(/[\ -]+/g, '_').toLowerCase();
    const recipeIngredients = this.getSelectedIngredientIds(this.ingredients);
    const recipeOptionalIngredients = this.getSelectedIngredientIds(this.optionalIngredients);
    this.prologService.answerQuestion(this.formatQuestion(name, recipeIngredients, recipeOptionalIngredients))
      .then(_ => {
        this.router.navigate(['/recipes'])
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }

  private getSelectedIngredientIds(ingredients: any[]): any[] {
    const result = [];
    for(const item of ingredients) {
      if (item.selected) {
        result.push(item.ingredient.links.X.id);
      }
    }
    return result;
  }

  private formatQuestion(name: string, recipeIngredients: any[], recipeOptionalIngredients: any[]): string {
    return `asserta(recipe(${name}, [${recipeIngredients.join(', ')}], [${recipeOptionalIngredients.join(', ')}])).`;
  }
}
