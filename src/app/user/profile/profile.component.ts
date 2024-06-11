import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../../services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  user!: User;
  dialogOpened: boolean = false;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.user = this.getUserData();
  }

  // fetches user data from local storage
  getUserData() {
    return JSON.parse(localStorage.getItem('user')!);
  }

  // opens edit dialog
  openDialog() {
    this.dialogOpened = true;

    const editDialog = this.dialog.open(EditComponent, {
      disableClose: false,
      width: '450px',
      height: '80dvh',
      // data: { user: this.user }, does nothing. explore further
    });

    editDialog.afterOpened().subscribe(() => (this.dialogOpened = false));
  }
}
