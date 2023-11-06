import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { SharkComponent } from '../shark/shark.component';
import { Product } from 'src/interfaces/product';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, ProductComponent, SharkComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
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
