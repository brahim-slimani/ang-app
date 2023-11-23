import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { JWTWorkerService } from "./services/jwt-worker.service";

@Component({
    selector: 'app-root',
    template: `
    <style>
      .content-wrapper {
          padding: 3% 10%;
          width: auto;
      }
      .tint-bck {
          background-color: var(--background-tint);
          min-height: 100vh;
      }
    </style>
    <main id="root-container" data-theme="light">
    <app-header *ngIf="this.jwtWorker.isAuthenticated()"></app-header> 
    <section id="route-wrapper" class="content-wrapper" [ngClass]="{'tint-bck': activeClass}">
      <router-outlet></router-outlet>
    </section>
    <app-footer></app-footer>
    </main>`,
})

export class AppComponent {
    activeClass: Boolean = true;

    ngDoCheck() {
        this.activeClass = !this.router.url.includes("details/") && !this.router.url.includes("login");
    }

    constructor(private router: Router, public jwtWorker: JWTWorkerService) {}
}