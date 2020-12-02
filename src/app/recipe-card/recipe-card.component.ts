import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PrologService} from '../prolog/prolog.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {

  @Input()
  recipe: any = null;

  @Output()
  deleteRecipe = new EventEmitter<void>();

  constructor(
    private prologService: PrologService
  ) {
  }

  ngOnInit(): void {
  }


  resolveList(prologList: any): string[] {
    if (!prologList || !prologList.args) {
      return [];
    }

    const result = [];
    let current = prologList.args;

    while (current && current.length >= 2) {
      result.push(current[0].id);
      current = current[1].args;
    }

    return result;
  }

  delete(): void {
    const name = this.recipe.links.Name.id;
    const ingredients = this.recipe.links.Ingredients;
    this.prologService.answerQuestion(`retractRecipe(${name}).`)
      .then(result => {
        this.deleteRecipe.emit();
      })
      .catch(err => console.log(err));
  }
}
