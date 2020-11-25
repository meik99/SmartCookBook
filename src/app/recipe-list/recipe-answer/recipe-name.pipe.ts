import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'recipeName'
})
export class RecipeNamePipe implements PipeTransform {

  transform(value: string): string {
    return value.replace('_', ' ');
  }

}
