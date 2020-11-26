import {Component, OnInit} from '@angular/core';
import {PrologService} from '../prolog/prolog.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  error: any = null;
  recipes: any[] = [];

  constructor(
    private prologService: PrologService
  ) {
  }

  ngOnInit(): void {
    this.prologService
      .answerQuestion('recipe(Name, Ingredients, OptionalIngredients).')
      .then(result => {
        this.recipes = result;
      })
      .catch(err => this.error = err);
  }

}
