
import { Component } from '@angular/core';
import { AuthService } from '../Services/Auth.Service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

  login() {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        console.log('Login successful', response);
        // Handle successful login here
      },
      error => {
        console.error('Login failed', error);
        // Handle login error here
      }
    );
  }
}
