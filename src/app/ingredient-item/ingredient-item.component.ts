import {Component, Input, OnInit} from '@angular/core';
import {PrologService} from '../prolog/prolog.service';

@Component({
  selector: 'app-ingredient-item',
  templateUrl: './ingredient-item.component.html',
  styleUrls: ['./ingredient-item.component.scss']
})
export class IngredientItemComponent implements OnInit {

  @Input()
  ingredient: string = null;
  alternatives: any[] = [];
  noAlternatives = false;
  showAlternatives = false;

  constructor(
    private prologService: PrologService
  ) {
  }

  ngOnInit(): void {
  }

  toggleShowAlternatives(ingredient: string): void {
    this.showAlternatives = !this.showAlternatives;

    if (this.alternatives.length > 0) {
      this.alternatives = [];
    } else {
      this.prologService.answerQuestion(`isAlternativeTo(${ingredient}, X).`)
        .then(result => {
          console.log(result);
          this.alternatives = result;
          this.noAlternatives = result.length <= 0;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
}
