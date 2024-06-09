import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private userService: UserService, private router: Router) {}

  errorExists = false;
  errorText = '';

  onSubmit(form: NgForm) {
    let email = form.value.email;
    let password = form.value.password;

    let user = this.userService.getUserByEmail(email);

    if (!user) {
      this.errorExists = true;
      this.errorText = 'User does not exist';
      return;
    }

    let isPasswordValid = this.userService.isPasswordValid(email, password);

    if (isPasswordValid) {
      this.errorExists = false;
      this.router.navigate(['']);
    } else {
      this.errorExists = true;
      this.errorText = 'Incorrect password';
    }
  }
}
