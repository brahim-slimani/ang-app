import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  async getProducts(): Promise<any> {
    const data = await fetch(`${environment.apiUrl}/products`);
    return data.json();
  }
}
