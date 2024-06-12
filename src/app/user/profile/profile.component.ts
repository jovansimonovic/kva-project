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

  constructor(private dialog: MatDialog, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.userSubject$.subscribe((user) => {
      this.user = user;
    });
  }

  // opens edit dialog
  openDialog() {
    this.dialog.open(EditComponent, {
      disableClose: false,
      width: '450px',
      height: '80dvh',
    });
  }
}
