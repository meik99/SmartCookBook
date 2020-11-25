import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {

  @Input()
  recipe: any = null;

  constructor() { }

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

}
