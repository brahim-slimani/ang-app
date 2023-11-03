import { Component } from '@angular/core';
import { SharkComponent } from './shark/shark.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { Product } from 'src/interfaces/product';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<main>
    <app-header></app-header>
    <section>
      <app-shark></app-shark>
      <app-product [product]="productDummyObject"></app-product>
    </section>
  </main>`,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [SharkComponent, HeaderComponent, ProductComponent]
})
export class AppComponent {

  productDummyObject: Product = {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ]
  }
}
