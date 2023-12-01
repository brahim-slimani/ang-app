import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/interfaces/product';


@Component({
  selector: 'app-spread',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatButtonModule, MatTableModule],
  templateUrl: './spread.component.html',
  styleUrls: ['./spread.component.scss']
})
export class SpreadComponent {

  products: Product[] = [];
  displayedColumns: string[] = ["id", "title", "brand", "price", "category", "stock", "discountPercentage", "rating"]
  //displayedColumns: string[] = ["title"]

  constructor(private productService: ProductService) {
    productService.getProducts().subscribe(data => {
      this.products = data.products;
    })
  }

}
