import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  postProduct(data: Product) {
    return this.http.post<any>('http://localhost:3000/productList/', data);
  }

  getProduct() {
    return this.http.get<any>('http://localhost:3000/productList/');
  }

  putProduct(data: Product, id: number) {
    return this.http.put<any>(`http://localhost:3000/productList/${id}`, data);
  }

  deleteProduct(id: number) {
    return this.http.delete<any>(`http://localhost:3000/productList/${id}`);
  }
}
