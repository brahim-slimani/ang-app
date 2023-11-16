import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from 'src/app/interfaces/product';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<any> {
    return this.httpClient.request('GET', `${environment.apiUrl}/auth/products`, { responseType: 'json' });
  }

  getProductDetails(id: Number): Observable<any> {
    return this.httpClient.request('GET', `${environment.apiUrl}/auth/products/${id}`, { responseType: 'json' })
  }

  createProduct(product: Product): Observable<any> {
    return this.httpClient.request('POST', `${environment.apiUrl}/auth/products/add`, { body: JSON.stringify(product) })
  }

  // async getProducts(): Promise<any> {
  //   const data = await fetch(`${environment.apiUrl}/products`);
  //   return data.json();
  // }

}
