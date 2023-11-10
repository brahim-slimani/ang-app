import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Credential } from 'src/app/interfaces/credential';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { JWTWorkerService } from 'src/app/services/jwt-worker.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // kminchelle 0lelplR
  formData: Credential = { username: null, password: null }
  formSubmitted: boolean = false;
  errorMsg: string | undefined;

  constructor(private router: Router, private authService: AuthService, private jwtWorker: JWTWorkerService) {
    if (jwtWorker.isAuthenticated()) router.navigate(["/"])
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.formData.username && this.formData.password) {
      this.authService.login(this.formData).subscribe(res => {
        this.errorMsg = '';
        this.jwtWorker.persistTokenInStorage(res.token);
        console.log("Success", JSON.stringify(res));
        this.router.navigate(['/']);
      }, error => {
        console.log(JSON.stringify(error));
        this.errorMsg = error?.error?.message;
      })
    }
  }

}
