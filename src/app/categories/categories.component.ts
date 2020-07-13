import { Component, OnInit } from '@angular/core';

import { UsageService } from '../core/services/usage.service';
import { Category } from '../core/models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];
  isLoading = false;

  constructor(
    private usageService: UsageService
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  private async getCategories() {
    try {
      this.isLoading = true;
      this.categories = await this.usageService.getCategories().toPromise();
    } catch (e) {
      console.log(e);
      // TODO: display error as snack bar
    } finally {
      this.isLoading = false;
    }
  }

}
