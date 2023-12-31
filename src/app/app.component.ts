import { Component, signal } from "@angular/core";
import { Router } from "@angular/router";
import { JWTWorkerService } from "./services/jwt-worker.service";
import { CommonService } from "./services/common.service";

@Component({
    selector: 'app-root',
    template: `
    <style>
      .content-wrapper {
          padding: 3% 10%;
          width: auto;
          background-color: var(--container-bck-color);
      }
      main[data-theme="light"] .white-bck {
          background-color: white !important;
      }
    </style>
    <main id="root-container" attr.data-theme="{{themeState()}}">
    <app-header *ngIf="this.jwtWorker.isAuthenticated()"></app-header> 
    <section id="route-wrapper" class="content-wrapper" [ngClass]="{'white-bck': shouldBeWhiteBck}">
      <router-outlet></router-outlet>
    </section>
    <app-footer></app-footer>
    <app-theme-switcher></app-theme-switcher>
    </main>`,
})

export class AppComponent {
    shouldBeWhiteBck: Boolean = true;
    themeState = signal("");
 
    ngDoCheck() {
        this.commonService.themeState$.subscribe(val => {
            this.themeState.set(val);
        })
        this.shouldBeWhiteBck = this.router.url.includes("details/") || this.router.url.includes("login");
    }

    constructor(private router: Router, public jwtWorker: JWTWorkerService, private commonService: CommonService) {}
}