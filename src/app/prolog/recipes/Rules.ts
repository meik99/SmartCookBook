export const RecipeRules = `

member(X,[X|_]).
member(X,[_|Xs]) :- member(X,Xs).

ingredientMember(X, Y) :- member(X, Y).
ingredientMember(X, Y) :- isAlternativeTo(Alt, X), member(Alt, Y).

ingredientSubset(X, []).
ingredientSubset(X, [X|_]).
ingredientSubset(X, [Y | Tail]) :- ingredientMember(Y, X), ingredientSubset(X, Tail).


isRecipe(X, Y, Z) :- recipe(X, Y, Z).
isRecipe(X, Y, A, B) :- recipe(X, A, B), ingredientSubset(A, Y).
`;

// ingredientSubset(X, [Y | Tail]) :- isAlternative(Y, Alt), member(Alt, X), ingredientSubset(X, Tail).
