import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ingredient-card',
  templateUrl: './ingredient-card.component.html',
  styleUrls: ['./ingredient-card.component.scss']
})
export class IngredientCardComponent implements OnInit {


  private _ingredient: any = null;

  constructor() { }

  ngOnInit(): void {
  }


  get ingredient(): any {
    return this._ingredient;
  }

  @Input()
  set ingredient(value: any) {
    this._ingredient = value;
  }
}
