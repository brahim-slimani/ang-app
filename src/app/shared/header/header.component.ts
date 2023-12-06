import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JWTWorkerService } from 'src/app/services/jwt-worker.service';
import { AuthService } from 'src/app/services/auth.service';
import { NAV_ITEMS } from '../constants';

@Component({ selector: 'app-header', standalone: true, imports: [CommonModule, RouterModule], templateUrl: './header.component.html', styleUrls: ['./header.component.scss'] })
export class HeaderComponent {

  navItems: Array<any> = NAV_ITEMS
  constructor(public authService: AuthService) { }

}
