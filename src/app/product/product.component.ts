import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/interfaces/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent {
  @Input() product!: Product
}
