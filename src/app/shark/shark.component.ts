import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shark',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shark.component.html',
  styleUrls: ['./shark.component.scss'],
})
export class SharkComponent {
  onFilter() {
    alert("salam");
  }
}
