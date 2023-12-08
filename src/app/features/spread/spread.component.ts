import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { ProductService } from 'src/app/services/product.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TableComponent } from 'src/app/shared/table/table.component';
import { Product } from 'src/app/interfaces/product';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';


@Component({
  selector: 'app-spread',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatButtonModule, MatTableModule, MatPaginatorModule, TableComponent],
  templateUrl: './spread.component.html',
  styleUrls: ['./spread.component.scss']
})
export class SpreadComponent {

  productDataSource = new MatTableDataSource([]);
  public commonService: CommonService = inject(CommonService);
  router: Router = inject(Router);

  displayedColumns = [
    { label: "#", column: "id" },
    { label: "Title", column: "title" },
    { label: "Brand", column: "brand" },
    { label: "Price", column: "price" },
    { label: "Category", column: "category" },
    { label: "Stock", column: "stock" },
    { label: "Discount Per", column: "discountPercentage" },
    { label: "Rating", column: "rating" },
    { label: "Detail Action", column: 'action', action: `<a class='custom-btn'>Learn more</a>`, actionFn(row: any) { navigate2details(row, this.router) }, router: inject(Router) }
  ]

  constructor(private productService: ProductService) {
    productService.getProducts().subscribe(data => {
      this.productDataSource = new MatTableDataSource(data.products);
    });
  }

}

function navigate2details(row: any, router: Router) {
 router.navigateByUrl(`details/${row.id}`)
}

