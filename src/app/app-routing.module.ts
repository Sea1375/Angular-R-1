import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriesComponent } from './categories/categories.component';
import { FilmsComponent } from './films/films.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';


const routes: Routes = [
  { path: '', component: CategoriesComponent },
  { path: 'category/:id',
    component: FilmsComponent ,
    children: [
      {
        path: ':filmId', component: FilmDetailComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
