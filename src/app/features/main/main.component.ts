import { Component, Signal, WritableSignal, computed, effect, inject, signal, untracked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { SharkComponent } from '../shark/shark.component';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, ProductComponent, SharkComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  productList: Product[] = [];
  filtredProducts: WritableSignal<Product[]> = signal([]);
  productService: ProductService = inject(ProductService);
  loading: Boolean = true;
  pageSize = 10;
  fullPage: boolean = false;
  displayFactor = signal(this.pageSize);
  products: Signal<Product[]> = computed(() => this.filtredProducts().slice(0, this.displayFactor()));

  constructor() {
    this.productService.getProducts().subscribe((res) => {
      this.productList = res.products;
      this.filtredProducts.set(this.productList);
      this.loading = false;
    }, error => {
      console.error(error);
      //alert(JSON.stringify(error));
    });
  }

  filterCallback(data: string) {
    if (data) {
      this.filtredProducts.set(this.productList.filter(product =>
        product.title?.toLocaleLowerCase().includes(data.toLocaleLowerCase())
      ));
    } else {
      this.filtredProducts.set(this.productList);
    }
  }

  seeMoreAction() {
    this.displayFactor.update(val => val + this.pageSize);
  }

  //Trigger changes on signals state
  private onSignalChnage = effect(() => {
    this.fullPage = !(this.displayFactor() < this.filtredProducts().length);
    untracked(() => {
      //Signals dependencies to be ignored should be untracked here!
    })
  });

}
