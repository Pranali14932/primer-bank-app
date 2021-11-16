import { CategoryService } from './../../service/Category.service';
import { Category } from '../../model/Modal';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-Category',
  templateUrl: './add-Category.component.html',
  styleUrls: ['./add-Category.component.css'],
})
export class AddCategoryComponent implements OnInit {
  Category: Category = {} as Category;
  progressBar = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private CategoryService: CategoryService
  ) {}

  ngOnInit(): void {
    if (this.data.idCategory != null) {
      this.CategoryService
        .findCategoryById(this.data.idCategory)
        .subscribe((Category) => {
          this.Category = Category;
        });
    }
  }
  addCategory() {
    this.progressBar = true;
    if (this.data.idCategory != null) {
      this.CategoryService
        .editCategory(this.Category, this.data.idCategory)
        .subscribe((Category) => {
          this.Category = Category;
          window.location.reload();
        });
    } else {
      this.CategoryService
        .addCategoryToUser(this.Category, this.data.idUser)
        .subscribe((Category) => {
          this.Category = Category;
          window.location.reload();
        });
    }
  }
}
