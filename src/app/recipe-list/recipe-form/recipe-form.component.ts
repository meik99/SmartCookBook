import { Component, OnInit } from '@angular/core';
import {RecipeForm} from './RecipeForm';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent implements OnInit {
  recipe = new RecipeForm();

  constructor() { }

  ngOnInit(): void {
  }

}
