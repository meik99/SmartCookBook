import {Component, OnInit} from '@angular/core';
import {PrologService} from '../prolog/prolog.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private _searchTerm = '';

  error: any = null;
  results: any[] = [];

  constructor(
    private prologService: PrologService
  ) {
  }

  ngOnInit(): void {
  }


  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(value: string) {
    this._searchTerm = value;

    if (this.formatSearchTerm().length > 0) {
      this.prologService.answerQuestion(this.formatQuestion())
        .then(result => {
          console.log(result);
          this.results = result;
        })
        .catch(err => {
          console.log(err);
          this.error = err;
        });
    }
  }

  formatQuestion(): string {
    return `isRecipe(Name, [${this.formatSearchTerm().join(', ')}], Ingredients, OptionalIngredients).`;
  }

  formatSearchTerm(): string[] {
    const splitByComma = this.searchTerm.split(',');
    const words = [];

    for (const word of splitByComma) {
      if (word && word.trim().length > 0) {
        words.push(word.trim().replace(/[\ -]+/g, '_').toLowerCase());
      }
    }

    return words;
  }
}
