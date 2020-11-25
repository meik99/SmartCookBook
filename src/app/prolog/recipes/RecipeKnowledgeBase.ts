import {KnowledgeBase} from '../KnowledgeBase';
import {RecipeList} from './Recipe';

export class RecipeKnowledgeBase implements KnowledgeBase {
  getKnowledgeBase(): string {
    let result = '';
    for (const recipe of RecipeList) {
      result += `recipe(${recipe.name}, [${recipe.ingredients.join(',')}], [${recipe.optionalIngredients.join(',')}]).\n`;
    }
    return result;
  }
}
