import { Component } from '@angular/core';
import { SharkComponent } from './components/shark/shark.component';
import { HeaderComponent } from './shared/header/header.component';
import { ProductComponent } from './components/product/product.component';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

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
  imports: [CommonModule, SharkComponent, ProductComponent, RouterModule, HeaderComponent]
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
