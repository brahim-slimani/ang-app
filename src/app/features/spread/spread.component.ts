import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { ProductService } from 'src/app/services/product.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';


@Component({
  selector: 'app-spread',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatButtonModule, MatTableModule, MatPaginatorModule],
  templateUrl: './spread.component.html',
  styleUrls: ['./spread.component.scss']
})
export class SpreadComponent {

  dataLength = 0;
  productDataSource = new MatTableDataSource([]);
  displayedColumns: string[] = ["id", "title", "brand", "price", "category", "stock", "discountPercentage", "rating"]

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private productService: ProductService) {
    productService.getProducts().subscribe(data => {
      this.productDataSource = new MatTableDataSource(data.products);
      this.dataLength = data.products.length;
      this.productDataSource.paginator = this.paginator;
    });
  }

}
