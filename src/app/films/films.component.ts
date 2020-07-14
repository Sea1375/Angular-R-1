import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Film } from '../core/models/film';
import { UsageService } from '../core/sevices/usage.service';
import { Category } from '../core/models/category';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  films: Film[];
  selectedCategory: Category;

  categoryId: number;

  constructor(
    private route: ActivatedRoute,
    private usageService: UsageService
  ) { }

  ngOnInit(): void {
    this.categoryId = Number(this.route.snapshot.paramMap.get('id'));
    this.getCategory();
    this.getFilms();
  }

  private getFilms(): void {
    this.usageService.getFilms(this.categoryId).subscribe(films => this.films = films);
  }

  private getCategory(): void {
    this.usageService.getCategory(this.categoryId).subscribe(category => this.selectedCategory = category);
  }

}
