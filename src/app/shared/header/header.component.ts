import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JWTWorkerService } from 'src/app/services/jwt-worker.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private jwtWorker: JWTWorkerService) {}

  logout() {
    this.jwtWorker.deleteToken();
  }
}
