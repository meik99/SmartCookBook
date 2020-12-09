import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IngredientListComponent} from './ingredient-list/ingredient-list.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {SearchComponent} from './search/search.component';
import {IngredientFormComponent} from './ingredient-list/ingredient-form/ingredient-form.component';
import {RecipeFormComponent} from './recipe-list/recipe-form/recipe-form.component';
import {KnowledgeBaseComponent} from './knowledge-base/knowledge-base.component';

const routes: Routes = [
  {
    path: 'ingredients',
    component: IngredientListComponent
  },
  {
    path: 'ingredients/add',
    component: IngredientFormComponent
  },
  {
    path: 'recipes',
    component: RecipeListComponent
  },
  {
    path: 'recipes/add',
    component: RecipeFormComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'knowledge-base',
    component: KnowledgeBaseComponent
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
