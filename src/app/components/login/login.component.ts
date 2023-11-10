import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Credential, defaultCredential } from 'src/app/interfaces/credential';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  formData: Credential = { ...defaultCredential }
  formSubmitted: boolean = false;

}
