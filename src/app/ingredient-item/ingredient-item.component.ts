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
          this.alternatives = result;
          this.noAlternatives = result.length <= 0;
          this.makeAlternativesDistinct();
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  private makeAlternativesDistinct(): void {
    const distinctAlternatives = [];

    for (const item of this.alternatives) {
      const existingItem = distinctAlternatives.find(other => other.links.X.id === item.links.X.id);
      if (!existingItem && item.links.X.id !== this.ingredient) {
        distinctAlternatives.push(item);
      }
    }

    this.alternatives = distinctAlternatives;
  }
}
