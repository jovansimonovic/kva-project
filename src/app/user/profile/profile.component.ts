import { Component, OnInit } from '@angular/core';
import { User } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  user!: User;

  ngOnInit(): void {
    this.user = this.getUserData();
    console.log(this.user);
  }

  getUserData() {
    return JSON.parse(localStorage.getItem('user')!);
  }
}
