import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  isCredentialsFailed: boolean = false;
  constructor(private router: Router) {}

  onLogin(): void {
    if (this.username === 'admin' && this.password === 'admin') {
      this.isCredentialsFailed = false;
      this.router.navigate(['/dashboard/company']);
    } else if (this.username === '' && this.password === '') {
      this.isCredentialsFailed = true;
    } else {
      this.isCredentialsFailed = true;
      console.log(this.isCredentialsFailed);
    }
  }
}
