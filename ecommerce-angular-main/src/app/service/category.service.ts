import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../model/Modal';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  addCategoryToUser(Category: Category, idUser: number): Observable<Category> {
    return this.http.post<Category>(
      `http://localhost:8008/api/addCategoryToUser/${idUser}`,
      Category
    );
  }
  editCategory(Category: Category, id: number): Observable<Category> {
    return this.http.put<Category>(
      `http://localhost:8008/api/editCategory/${id}`,
      Category
    );
  }

  deleteCategory(id: number): Observable<Category> {
    return this.http.delete<Category>(
      `http://localhost:8008/api/deleteCategory/${id}`
    );
  }

  findCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(
      `http://localhost:8008/api/findCategoryById/${id}`
    );
  }

  findAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(
      `http://localhost:8008/api/findAllCategories`
    );
  }

  findCategoriesForUser(idUser: number): Observable<Category[]> {
    return this.http.get<Category[]>(
      `http://localhost:8008/api/findCategoriesForUser/${idUser}`
    );
  }
}
