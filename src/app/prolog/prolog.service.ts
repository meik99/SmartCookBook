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
  private questions: string[] = [];
  private working = false;

  constructor() {
    this.buildKnowledgeBase();
  }

  private buildKnowledgeBase(): any {
    this._session.consult(`
:- use_module(library(lists)).
:- dynamic(ingredient/1).
:- dynamic(isAlternative/2).
:- dynamic(recipe/3).

${new IngredientKnowledgeBase().getKnowledgeBase()}
${new RecipeKnowledgeBase().getKnowledgeBase()}
${new AlternativesKnowledgeBase().getKnowledgeBase()}

retractRecipe(X) :- retract(recipe(X, Y, Z)), recipe(X, Y, Z).

    `, {
      success: () => console.log('successfully loaded program'),
      error: (err) => console.log(err)
    });
  }


  async answerQuestion(question: string): Promise<any[]> {
    return await new Promise<any[]>((resolve, reject) => {
      this.questions.push(question);

      this._session.query(question, {
        success: (goal) => {
          this.getAnswer([], (answers, err) => {
            if (err) {
              reject(err);
            } else {
              resolve(answers);
            }
          });
        },
        error: (err) => reject(err)
      });

    });
  }

  format(answer: any): any {
    return this._session.format_answer(answer);
  }

  private getAnswer(list, done): any {
    this._session.answer({
      success: (answer) => {
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
        console.log('limit reached');
        done(list);
      }
    });
  }
}
