import { Component } from '@angular/core';
import { SharkComponent } from './components/shark/shark.component';
import { HeaderComponent } from './shared/header/header.component';
import { ProductComponent } from './components/product/product.component';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { JWTWorkerService } from './services/jwt-worker.service';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<main>
    <app-header *ngIf="this.jwtWorker.isAuthenticated()"></app-header> 
    <section id="route-wrapper" class="content-wrapper" [ngClass]="{'tint-bck': activeClass}">
      <router-outlet></router-outlet>
    </section>
    <app-footer></app-footer>
  </main>`,
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, SharkComponent, ProductComponent, RouterModule, HeaderComponent, FooterComponent]
})

export class AppComponent {
  activeClass: Boolean = true;

  ngDoCheck() {
    this.activeClass = !this.router.url.includes("details/") && !this.router.url.includes("login");
  }

  constructor(private router: Router, public jwtWorker: JWTWorkerService) {
   console.log(this.router)
  }
}
