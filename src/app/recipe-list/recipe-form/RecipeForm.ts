export class RecipeForm {
  private _name = '';

  constructor(args?: any) {
    if (args) {
      if (args.name) {
        this.name = args.name;
      }
    }
  }

  get name(): string {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}
