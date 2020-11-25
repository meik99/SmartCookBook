import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IngredientListComponent} from './ingredient-list/ingredient-list.component';

const routes: Routes = [
  {
    path: '',
    component: IngredientListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
