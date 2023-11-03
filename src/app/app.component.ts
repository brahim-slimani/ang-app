import { Component, inject } from '@angular/core';
import { SharkComponent } from './shark/shark.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { Product } from 'src/interfaces/product';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<main>
    <app-header></app-header>
    <section class="content-wrapper">
      <app-shark></app-shark>
      <section class="grid-container">
        <app-product 
            *ngFor="let productIem of productList" 
            [product]="productIem">
      </app-product>
      </section>
    </section>
  </main>`,
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, SharkComponent, HeaderComponent, ProductComponent]
})

export class AppComponent {
  productList: Product[] = [];
  productService: ProductService = inject(ProductService);

  constructor() {
    this.productService.getProducts().then((res) => {
      this.productList = res.products;
    }, error => {
      console.error(error);
      alert(JSON.stringify(error));
    });
  }

}
