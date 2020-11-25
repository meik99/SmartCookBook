import {Pipe, PipeTransform} from '@angular/core';
import * as prolog from 'tau-prolog';

@Pipe({
  name: 'ingredientAnswer'
})
export class IngredientAnswerPipe implements PipeTransform {

  transform(value: any): string {
    if (!value || !value.links) {
      return '';
    }

    let result = '';
    for (const prop of Object.values(value.links)) {
      // @ts-ignore
      if (prop && prop.id) {
        // @ts-ignore
        let name: string = prop.id;
        name = name.replace('_', ' ');
        result += name;
      }
    }

    return result;
  }

}
