export const RecipeRules = `

member(X,[X|_]).
member(X,[_|Xs]) :- member(X,Xs).

subset(X, []).
subset(X, [X|_]).
subset(X, [Y | Tail]) :- member(Y, X), subset(X, Tail).

isRecipe(X, Y, A, B) :- recipe(X, A, B), subset(A, Y).
isRecipe(X, Y, Z) :- recipe(X, Y, Z).

`;
