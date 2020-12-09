import {KnowledgeBase} from '../KnowledgeBase';
import {AlternativeFacts} from './Alternatives';

export class AlternativesKnowledgeBase implements KnowledgeBase {
  getKnowledgeBase(): string {
    return AlternativeFacts + `isAlternativeTo(X, Y) :- isAlternative(X, Y).
isAlternativeTo(X, Y) :- isAlternative(Y, X).
isAlternativeTo(X, Y) :- isAlternative(X, Z), isAlternative(Z, Y).
isAlternativeTo(X, Y) :- isAlternative(Z, X), isAlternative(Z, Y).
isAlternativeTo(X, Y) :- isAlternative(X, Z), isAlternative(Y, Z).
isAlternativeTo(X, Y) :- isAlternative(Z, X), isAlternative(Y, Z).
`;
  }
}
