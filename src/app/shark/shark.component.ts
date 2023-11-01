import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-shark',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      shark works!
    </p>
  `,
  styleUrls: ['./shark.component.scss']
})
export class SharkComponent {

}
