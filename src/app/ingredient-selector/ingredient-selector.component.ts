import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PrologService} from '../prolog/prolog.service';

@Component({
  selector: 'app-ingredient-selector',
  templateUrl: './ingredient-selector.component.html',
  styleUrls: ['./ingredient-selector.component.scss']
})
export class IngredientSelectorComponent implements OnInit {
  ingredients = [];

  @Input()
  size = 'large';

  @Output()
  ingredientSelected = new EventEmitter<any[]>();

  constructor(
    private prologService: PrologService
  ) {
  }

  ngOnInit(): void {
    this.loadIngredients();
  }

  loadIngredients(): void {
    this.prologService.answerQuestion(`ingredient(X).`)
      .then(result => {
        result = result.sort((a, b) => a.links.X.id.localeCompare(b.links.X.id));
        result.forEach(item => {
          this.ingredients.push({
            selected: false,
            ingredient: item
          });
        });
      })
      .catch(err => console.log(err));
  }

  selectItem(item: any): void {
    item.selected = !item.selected;
    this.ingredientSelected.emit(this.ingredients);
  }
}
