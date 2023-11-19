import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, productDefault } from 'src/app/interfaces/product';
import { FormsModule } from '@angular/forms';
import { REQUIRED_INPUT_MESSAGE } from 'src/app/shared/constants';
import { ProductService } from 'src/app/services/product.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  formData: Product = { ...productDefault };
  formSubmitted: boolean = false;
  productService: ProductService = inject(ProductService);
  callbackResponse: string | undefined;

  onSubmit() {
    this.formSubmitted = true;
    if (this.formData.title && this.formData.category && this.formData.price && this.formData.brand) {
      this.productService.createProduct(this.formData).subscribe(res => {
        this.callbackResponse = `Product has been created successfully, ${JSON.stringify(res)}`;
      }, error => {
        alert("ERROR => " + JSON.stringify(error));
      })
    }
  }
}
