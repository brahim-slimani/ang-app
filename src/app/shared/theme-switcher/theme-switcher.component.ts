import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent {
  themeOptions = {
    dark: "Dark",
    light: "Light"
  }
  selectedTheme = signal(this.themeOptions.light);

  switchTheme(): void {
    this.selectedTheme.update(val => val == this.themeOptions.dark ? this.themeOptions.light : this.themeOptions.dark);
  }

}
