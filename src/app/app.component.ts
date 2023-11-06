import { Component, inject } from '@angular/core';
import { SharkComponent } from './shark/shark.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { Product } from 'src/interfaces/product';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/services/product.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<main>
    <app-header></app-header>
    <section class="content-wrapper">
      <router-outlet></router-outlet>
    </section>
  </main>`,
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, SharkComponent, HeaderComponent, ProductComponent, RouterModule]
})

export class AppComponent {
  

}
