import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Credential } from 'src/app/interfaces/credential';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

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
  authService: AuthService = inject(AuthService);
  errorMsg: string | undefined;

  onSubmit() {
    this.formSubmitted = true;
    if (this.formData.username && this.formData.password) {
      this.authService.login(this.formData).subscribe(res => {
        this.errorMsg = '';
        alert("Success " + JSON.stringify(res));
      }, error => {
        console.log(JSON.stringify(error));
        this.errorMsg = error?.error?.message;
      })
    }
  }

}
