import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Film } from '../core/models/film';
import { UsageService } from '../core/services/usage.service';
import { Category } from '../core/models/category';
import { Producer } from '../core/models/producer';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  title = 'Films';
  films: Film[];
  selectedFilm: Film;
  selectedCategory: Category;
  producer: Producer;

  private category_id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usageService: UsageService
  ) {
    this.category_id = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.getCategory();
    this.getFilms();
  }

  getFilms(): void {
    this.usageService.getFilms(this.category_id).subscribe(films => this.films = films);
  }

  getCategory(): void{
    this.usageService.getCategory(this.category_id).subscribe(category => this.selectedCategory = category);
  }

  getProducer(): void {
    this.usageService.getProducer(this.selectedFilm.producer_id).subscribe(producer => this.producer = producer);
  }

  sendData() {
    this.usageService.sourceOfError.next('Sending apple, just one time');
  }

}
