import { Component, inject } from '@angular/core';
import { SharkComponent } from './shark/shark.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { Product } from 'src/interfaces/product';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/services/product.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<main>
    <app-header></app-header>
    <section id="route-wrapper" class="content-wrapper" [ngClass]="{'tint-bck': activeClass}">
      <router-outlet></router-outlet>
    </section>
  </main>`,
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, SharkComponent, HeaderComponent, ProductComponent, RouterModule]
})

export class AppComponent {
  activeClass: Boolean = true;

  ngDoCheck() {
    this.activeClass = this.router.url === "/";
  }

  constructor(private router: Router) {
   console.log(this.router)
  }
}
