import {Component, OnInit} from '@angular/core';
import {IngredientForm} from './IngredientForm';
import {PrologService} from '../../prolog/prolog.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.scss']
})
export class IngredientFormComponent implements OnInit {
  ingredient = new IngredientForm();
  ingredients = [];

  constructor(
    private prologService: PrologService,
    private router: Router
  ) {
  }

  ngOnInit(): void {

  }

  save(): void {
    this.prologService.answerQuestion(`asserta(ingredient(${this.ingredient.name.trim().replace(/[\ -]+/g, '_').toLowerCase()})).`)
      .then(result => {
        const alternatives = [];
        for (const alternative of this.ingredients) {
          if (alternative.selected) {
            alternatives.push(alternative.ingredient);
          }
        }
        this.addAlternative(alternatives);
      })
      .catch(err => {
        console.log(err);
      });
  }

  private addAlternative(alternatives: any[]): void {
    if (alternatives.length <= 0) {
      this.router.navigate(['/ingredients'])
        .then(result => console.log(result))
        .catch(err => console.log(err));
    } else {
      const alternativesList = alternatives;
      const alternative = alternativesList.pop();
      this.prologService.answerQuestion(`asserta(isAlternative(${this.ingredient.name.trim().replace(/[\ -]+/g, '_').toLowerCase()}, ${alternative.links.X.id})).`)
        .then(result => {
          this.addAlternative(alternativesList);
        })
        .catch(err => console.log(err));
    }
  }

  onIngredientSelected(ingredients): void {
    this.ingredients = ingredients;
  }
}
