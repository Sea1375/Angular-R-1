import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoriesComponent} from './categories/categories.component';
import {CategoryDetailComponent} from "./category-detail/category-detail.component";


const routes: Routes = [
  { path: '', component: CategoriesComponent },
  { path: 'category/:id', component: CategoryDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
