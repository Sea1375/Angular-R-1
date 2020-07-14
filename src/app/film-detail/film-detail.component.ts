import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UsageService } from '../core/sevices/usage.service';
import { Film } from '../core/models/film';
import { Producer } from '../core/models/producer';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent implements OnInit, OnDestroy {

  film: Film;
  producer: Producer;
  isLoading: Boolean = false;

  private unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private usageService: UsageService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      takeUntil(this.unsubscribeAll)
    ).subscribe(params => {
      this.loadFileDetail(params.filmId);
    });
  }

  ngOnDestroy() {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  private async loadFileDetail(filmId: number) {
    try {
      this.isLoading = true;
      this.film = await this.usageService.getFilmById(Number(filmId)).toPromise();
      this.producer = await this.usageService.getProducer(this.film.producer_id).toPromise();
    } catch (e) {
      console.log(e);
      //TODO: something
    } finally {
      this.isLoading = true;
    }
  }

}
