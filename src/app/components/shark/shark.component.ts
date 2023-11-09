import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from 'src/app/shared/popup/popup.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shark',
  standalone: true,
  imports: [CommonModule, PopupComponent, RouterModule],
  templateUrl: './shark.component.html',
  styleUrls: ['./shark.component.scss'],
})
export class SharkComponent {

  filterKey: String | undefined;
  isPopupVisible: Boolean = false;
  @Output() filterOutput: EventEmitter<string> = new EventEmitter<string>();

  onFilter(val: string) {
    this.filterOutput.emit(val);
  }

  addProduct() {
    this.isPopupVisible = true;
  }
}
