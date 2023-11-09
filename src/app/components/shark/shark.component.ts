import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shark',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shark.component.html',
  styleUrls: ['./shark.component.scss'],
})
export class SharkComponent {

  filterKey: String | undefined;
  @Output() filterOutput: EventEmitter<string> = new EventEmitter<string>();

  onFilter(val: string) {
    this.filterOutput.emit(val);
  }

  addProduct() {
    alert("salam from ");
  }
}
