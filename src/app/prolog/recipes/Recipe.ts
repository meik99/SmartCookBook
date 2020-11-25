import {Basel, ChickenStock, MincedMeat, TomatoConcentrate, WhiteOnion} from '../ingredients/Ingredients';

export class Recipe {
  private _name: string;
  private _ingredients: string[];
  private _optionalIngredients: string[];

  constructor(args?: any) {
    if (args) {
      if (args.name) {
        this.name = args.name;
      }
      if (args.ingredients) {
        this.ingredients = args.ingredients;
      }
      if (args.optionalIngredients) {
        this.optionalIngredients = args.optionalIngredients;
      }
    }
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get ingredients(): string[] {
    return this._ingredients;
  }

  set ingredients(value: string[]) {
    this._ingredients = value;
  }

  get optionalIngredients(): string[] {
    return this._optionalIngredients;
  }

  set optionalIngredients(value: string[]) {
    this._optionalIngredients = value;
  }
}

export const RecipeList = [
  new Recipe({
    name: 'spaghetti_bolognese',
    ingredients: [MincedMeat, WhiteOnion, TomatoConcentrate, ChickenStock],
    optionalIngredients: [Basel]
  })
];
