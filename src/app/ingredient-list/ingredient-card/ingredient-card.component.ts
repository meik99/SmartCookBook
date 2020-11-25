import {Component, Input, OnInit} from '@angular/core';
import {PrologService} from '../../prolog/prolog.service';

@Component({
  selector: 'app-ingredient-card',
  templateUrl: './ingredient-card.component.html',
  styleUrls: ['./ingredient-card.component.scss']
})
export class IngredientCardComponent implements OnInit {


  private _ingredient: any = null;
  alternatives: any[] = [];

  constructor(
    private prologService: PrologService
  ) {
  }

  ngOnInit(): void {
  }


  get ingredient(): any {
    return this._ingredient;
  }

  @Input()
  set ingredient(value: any) {
    this._ingredient = value;
  }

  toggleShowAlternatives(): void {
    const name = this.ingredient.links.X.id;
    console.log(name);

    this.prologService.answerQuestion(`isAlternativeTo(${name}, X).`)
      .then(result => console.log(result))
      .catch(err => console.log(err));
  }
}
