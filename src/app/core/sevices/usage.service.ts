import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Category } from '../models/category';
import { CATEGORIES } from '../mock/mock-categories';
import { Film } from '../models/film';
import { FILMS } from '../mock/mock-films';
import { Producer } from '../models/producer';
import { PRODUCERS } from '../mock/mock-producers';

@Injectable({
  providedIn: 'root'
})
export class UsageService {

  constructor() { }

  getCategories(): Observable<Category[]> {
    return of(CATEGORIES);
  }

  getCategory(categoryId: number): Observable<Category> {
    return of(CATEGORIES.find(category => category.id === categoryId));
  }

  getFilms(categoryId: number): Observable<Film[]> {
    return of(FILMS.filter(film => film.category_id === categoryId));
  }

  getFilmById(filmId: number): Observable<Film> {
    return of(FILMS.find(film => film.id === filmId));
  }

  getProducer(producerId: number): Observable<Producer> {
    return of(PRODUCERS.find(producer => producer.id === producerId));
  }

}
