import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IngredientListComponent} from './ingredient-list/ingredient-list.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component';

const routes: Routes = [
  {
    path: 'ingredients',
    component: IngredientListComponent
  },
  {
    path: 'recipes',
    component: RecipeListComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/recipes'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
