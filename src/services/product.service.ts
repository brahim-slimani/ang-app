import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from 'src/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  async getProducts(): Promise<any> {
    const data = await fetch(`${environment.apiUrl}/products`);
    return data.json();
  }

  async getProductDetails(id: Number): Promise<Product> {
    const data = await fetch(`${environment.apiUrl}/products/${id}`);
    return data.json();
  }
}
