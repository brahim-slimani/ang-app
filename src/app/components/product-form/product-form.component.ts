import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, productDefault } from 'src/app/interfaces/product';
import { FormsModule } from '@angular/forms';
import { REQUIRED_INPUT_MESSAGE } from 'src/app/shared/constants';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  formData: Product = {...productDefault};
  formSubmitted: boolean = false;
  
  onSubmit() {
    this.formSubmitted = true;
    console.log("-->", this.formData)
  }
}
