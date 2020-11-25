import {IngredientList} from './Ingredients';
import {KnowledgeBase} from '../KnowledgeBase';


export class IngredientKnowledgeBase implements KnowledgeBase{
  getKnowledgeBase(): string {
    let result = '';

    for (const ingredient of IngredientList) {
      result += `ingredient(${ingredient}).\n`;
    }

    return result;
  }
}
