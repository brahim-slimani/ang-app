import { Component } from '@angular/core';
import { SharkComponent } from './shark/shark.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<main>
    <app-header></app-header>
    <section>
      <app-shark></app-shark>
    </section>
  </main>`,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [SharkComponent, HeaderComponent]
})
export class AppComponent {
  title = 'ang-app';
}
