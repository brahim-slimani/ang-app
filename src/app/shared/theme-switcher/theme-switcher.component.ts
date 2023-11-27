import { Component, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent {
  private commonService: CommonService = inject(CommonService);
  themeOptions = {
    dark: "dark",
    light: "light"
  }
  selectedTheme = signal("");

  constructor() {
    this.commonService.themeState$.subscribe(val => {
      this.selectedTheme.set(val);
    })
  }

  switchTheme(): void {
    this.selectedTheme.update(val => val == this.themeOptions.dark ? this.themeOptions.light : this.themeOptions.dark);
  }

  onThemeChange = effect(() => {
    this.commonService.updateThemeState(this.selectedTheme());
  })

}
