import {Injectable} from '@angular/core';
import * as prolog from 'tau-prolog';
import {IngredientKnowledgeBase} from './ingredients/IngredientKnowledgeBase';
import {RecipeKnowledgeBase} from './recipes/RecipeKnowledgeBase';
import {AlternativesKnowledgeBase} from './alternatives/AlternativesKnowledgeBase';

@Injectable({
  providedIn: 'root'
})
export class PrologService {

  private _session = prolog.create();

  constructor() {
    this.buildKnowledgeBase();
  }

  private buildKnowledgeBase(): any {
    this._session.consult(`
      ${new IngredientKnowledgeBase().getKnowledgeBase()}
      ${new RecipeKnowledgeBase().getKnowledgeBase()}
      ${new AlternativesKnowledgeBase().getKnowledgeBase()}
    `, {
      success: () => console.log('successfully loaded program'),
      error: (err) => console.log(err)
    });
  }


  answerQuestion(question: string): Promise<any[]> {
    return new Promise<any[]>((resolve, reject) => {
      this._session.query(question, {
        success: (goal) => this.getAnswer([], (answers, err) => {
          if (err) {
            reject(err);
          } else {
            resolve(answers);
          }
        }),
        error: (err) => reject(err)
      });
    });
  }

  private getAnswer(list, done): any {
    this._session.answer({
      success: (answer) => {
        console.log(answer);
        const result = list;
        result.push(answer);
        this.getAnswer(result, done);
      },
      fail: () => {
        done(list);
      },
      error: (err) => {
        console.log(err);
        done(list, err);
      },
      limit: () => {
        done(list);
      }
    });
  }
}
