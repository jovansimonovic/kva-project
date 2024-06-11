import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User, UserService } from '../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) {}

  currentUser = JSON.parse(localStorage.getItem('user')!);

  errorExists = false;
  errorText = '';

  onSubmit(form: NgForm) {
    this.errorExists = false;

    let phoneNumber = form.value.phoneNumber;

    if (phoneNumber.charAt(0) === '0') {
      phoneNumber = phoneNumber.slice(1);
    }

    this.userService.registerUser(
      form.value.firstName,
      form.value.lastName,
      form.value.email,
      form.value.password,
      form.value.address,
      form.value.city,
      form.value.zipCode,
      phoneNumber
    );

    this.snackBar.open('Profile updated successfully!', 'Close', {
      duration: 5000,
    });
  }

  closeDialog() {
    
  }
}
