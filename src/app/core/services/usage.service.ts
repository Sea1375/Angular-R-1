import { Injectable } from '@angular/core';
import { Observable, of, Subject, throwError } from 'rxjs';

import { Category } from '../models/category';
import { Film } from '../models/film';
import { Producer } from '../models/producer';
import { CATEGORIES } from '../mock/mock-categories';
import { FILMS } from '../mock/mock-films';
import { PRODUCERS } from '../mock/mock-producers';

@Injectable({
  providedIn: 'root'
})
export class UsageService {

  sourceOfError: Subject<any> = new Subject<any>();

  constructor() { }

  getCategories(): Observable<Category[]> {
    return of(CATEGORIES);
  }

  getCategory(id: number): Observable<Category> {
    return of(CATEGORIES.find(category => category.id === id));
  }

  getFilms(category_id: number): Observable<Film[]> {
    return of(FILMS.filter(film => film.category_id === category_id));
  }

  getFilmById(filmId: number): Observable<Film> {
    const found = FILMS.find(x => x.id === filmId);
    if (found) {
      return of(found);
    } else {
      return throwError('Film not found');
    }
  }


  getProducer(producer_id: number): Observable<Producer> {
    return of(PRODUCERS.find(producer => producer.id === producer_id));
  }

}
