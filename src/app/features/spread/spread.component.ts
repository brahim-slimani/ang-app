import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { ProductService } from 'src/app/services/product.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TableComponent } from 'src/app/shared/table/table.component';


@Component({
  selector: 'app-spread',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatButtonModule, MatTableModule, MatPaginatorModule, TableComponent],
  templateUrl: './spread.component.html',
  styleUrls: ['./spread.component.scss']
})
export class SpreadComponent {

  productDataSource = new MatTableDataSource([]);
  displayedColumns = [
    { label: "#", column: "id" },
    { label: "Title", column: "title" },
    { label: "Brand", column: "brand" },
    { label: "Price", column: "price" },
    { label: "Category", column: "category" },
    { label: "Stock", column: "stock" },
    { label: "Discount Per", column: "discountPercentage" },
    { label: "Rating", column: "rating" }
  ]

  constructor(private productService: ProductService) {
    productService.getProducts().subscribe(data => {
      this.productDataSource = new MatTableDataSource(data.products);
    });
  }

}
