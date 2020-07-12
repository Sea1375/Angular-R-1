import { Injectable } from '@angular/core';
import {Category} from './category';
import {Observable, of} from 'rxjs';
import {CATEGORIES} from './mock-categories';
import {Film} from './film';
import {FILMS} from './mock-films';
import {Producer} from './producer';
import {PRODUCERS} from './mock-producers';

@Injectable({
  providedIn: 'root'
})
export class UsageService {
  constructor() { }
  getCategories(): Observable<Category[]> {
    return of(CATEGORIES);
  }
  getFilms(): Observable<Film[]> {
    return of(FILMS);
  }
  getProducers(): Observable<Producer[]> {
    return of(PRODUCERS);
  }
}
