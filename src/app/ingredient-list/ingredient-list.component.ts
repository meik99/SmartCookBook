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
    this.prologService.answerQuestion('ingredient(X).')
      .then(result => this.ingredients = result)
      .catch(err => this.error = err);
  }

}
