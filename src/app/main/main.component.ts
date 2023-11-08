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
  filtredProducts: Product[] = [];
  productService: ProductService = inject(ProductService);
  loading: Boolean = true;

  constructor() {
    this.productService.getProducts().then((res) => {
      this.productList = res.products;
      this.filtredProducts = this.productList;
    }, error => {
      console.error(error);
      alert(JSON.stringify(error));
    }).finally(() => {
      this.loading = false;
    });

    /*this.productService.getProductsBis().subscribe((data) => {
      console.log("From main subsribtion ", data);
    });*/
  }

  receiveData(data: string) {
    if (data) {
      this.filtredProducts = this.productList.filter(product =>
        product.title.toLocaleLowerCase().includes(data.toLocaleLowerCase())
      );
    } else {
      this.filtredProducts = this.productList;
    }
  }
}
