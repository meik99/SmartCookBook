export class IngredientForm {
  private _name = '';
  private _alternatives: string[] = [];

  constructor(args?: any) {
    if (args) {
      if (args.name) {
        this.name = args.name;
      }
      if (args.alternatives) {
        this.alternatives = args.alternatives;
      }
    }
  }

  get name(): string {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get alternatives(): string[] {
    return this._alternatives;
  }

  set alternatives(value: string[]) {
    this._alternatives = value;
  }
}
