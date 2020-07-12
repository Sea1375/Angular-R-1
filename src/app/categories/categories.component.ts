import { Component, OnInit } from '@angular/core';
import {UsageService} from '../usage.service';
import {Category} from '../category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  title: 'Select Category';
  categories: Category[];

  constructor(private usageService: UsageService) { }

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories(): void {
    this.usageService.getCategories().subscribe(categories => this.categories = categories);
  }
}
