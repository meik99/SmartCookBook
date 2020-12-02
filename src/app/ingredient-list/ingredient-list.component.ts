import {Component, OnInit} from '@angular/core';
import * as prolog from 'tau-prolog';
import {PrologService} from '../prolog/prolog.service';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss']
})
export class IngredientListComponent implements OnInit {
  ingredients = [];
  error: any = null;

  constructor(
    private prologService: PrologService
  ) {
  }

  ngOnInit(): void {
    this.loadIngredients();
  }

  onDelete(): any {
    this.loadIngredients();
  }

  loadIngredients(): void {
    this.prologService.answerQuestion('ingredient(X).')
      .then(result => {
        result = result.sort((a, b) => a.links.X.id.localeCompare(b.links.X.id));
        this.ingredients = result;
      })
      .catch(err => this.error = err);
  }
}
