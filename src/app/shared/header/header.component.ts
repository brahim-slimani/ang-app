import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JWTWorkerService } from 'src/app/services/jwt-worker.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({ selector: 'app-header', standalone: true, imports: [CommonModule, RouterModule], templateUrl: './header.component.html', styleUrls: ['./header.component.scss'] })
export class HeaderComponent {

  constructor(public authService: AuthService) { }

}
