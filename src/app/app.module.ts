import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {IngredientAnswerPipe} from './ingredient-list/ingredient-answer/ingredient-answer.pipe';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecipeNamePipe } from './recipe-list/recipe-answer/recipe-name.pipe';
import { IngredientItemComponent } from './ingredient-item/ingredient-item.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { SearchComponent } from './search/search.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { IngredientCardComponent } from './ingredient-list/ingredient-card/ingredient-card.component';

@NgModule({
  declarations: [
    AppComponent,
    IngredientListComponent,
    IngredientAnswerPipe,
    RecipeListComponent,
    NavbarComponent,
    RecipeNamePipe,
    IngredientItemComponent,
    RecipeItemComponent,
    SearchComponent,
    RecipeCardComponent,
    IngredientCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
