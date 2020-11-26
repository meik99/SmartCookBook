import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PrologService} from '../../prolog/prolog.service';

@Component({
  selector: 'app-ingredient-card',
  templateUrl: './ingredient-card.component.html',
  styleUrls: ['./ingredient-card.component.scss']
})
export class IngredientCardComponent implements OnInit {
  @Output()
  deleteIngredient = new EventEmitter<void>();

  private _ingredient: any = null;
  alternatives: any[] = [];
  showAlternatives = false;

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
    this.showAlternatives = !this.showAlternatives;

    const name = this.ingredient.links.X.id;
    this.prologService.answerQuestion(`isAlternativeTo(${name}, X).`)
      .then(result => {
        this.alternatives = result;
        this.makeAlternativesDistinct();
      })
      .catch(err => console.log(err));
  }


  private makeAlternativesDistinct(): void {
    const distinctAlternatives = [];

    for (const item of this.alternatives) {
      const existingItem = distinctAlternatives.find(other => other.links.X.id === item.links.X.id);
      if (!existingItem && item.links.X.id !== this.ingredient.links.X.id) {
        distinctAlternatives.push(item);
      }
    }

    this.alternatives = distinctAlternatives;
  }

  delete(): void {
    const name = this.ingredient.links.X.id;
    this.prologService.answerQuestion(`retract(ingredient(${name})).`)
      .then(result => this.deleteIngredient.emit())
      .catch(err => console.log(err));
  }
}
