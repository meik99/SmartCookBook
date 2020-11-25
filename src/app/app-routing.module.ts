import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IngredientListComponent} from './ingredient-list/ingredient-list.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {SearchComponent} from './search/search.component';

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
    path: 'search',
    component: SearchComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/search'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
