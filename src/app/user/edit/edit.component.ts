import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  constructor(
    private dialog: MatDialog,
    private userService: UserService,
    private snackBar: MatSnackBar
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

    // todo: doesn't save changes if you don't change email and try relogging
    this.userService.updateUser(this.currentUser);

    // this.userService.registerUser(
    //   this.currentUser.firstName,
    //   this.currentUser.lastName,
    //   this.currentUser.email,
    //   this.currentUser.password,
    //   this.currentUser.address,
    //   this.currentUser.city,
    //   this.currentUser.zipCode,
    //   this.currentUser.phoneNumber
    // );

    this.closeDialog();

    this.snackBar.open('Profile updated successfully!', 'Close', {
      duration: 5000,
    });
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
