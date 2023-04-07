import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  isLoggedIn: boolean = false;

  onSubmitClicked() {
    if (this.password === '123456') {
      this.isLoggedIn = true;
    }
  }
}
