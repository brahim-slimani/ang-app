import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/interfaces/product';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  productService: ProductService = inject(ProductService);
  productId = -1;
  productDetails: Product | undefined;
  mainImgUri: String | undefined;
  loading: Boolean = true;

  constructor() {
    this.productId = this.route.snapshot.params['id'];
    this.productService.getProductDetails(this.productId).then((product: Product) => {
      this.productDetails = product;
      this.mainImgUri = product.thumbnail;
    }, error => {
      console.error(error);
    }).finally(() => {
      this.loading = false;
    })
  }

  onImageChange(uri: String) {
    this.mainImgUri = uri;
  }
}
