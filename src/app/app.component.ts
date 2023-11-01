import { Component } from '@angular/core';
import { SharkComponent } from './shark/shark.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<main>
  <div>Hello world!</div>
  <app-shark></app-shark>
  </main>`,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [SharkComponent]
})
export class AppComponent {
  title = 'ang-app';
}
