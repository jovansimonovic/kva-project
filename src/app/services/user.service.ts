import { Injectable } from '@angular/core';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address: string;
  city: string;
  zipCode: number;
  phoneNumber: string;
  // favoriteCategories?: string[];
}

@Injectable()
export class UserService {
  currentUser = UserService.dummyUserList[0];

  static dummyUserList: Array<User> = [
    {
      id: 0,
      firstName: 'ime1',
      lastName: 'prezime1',
      email: 'korisnik1@gmail.com',
      password: 'korisnik1',
      address: 'adresa korisnik 1',
      city: 'grad1',
      zipCode: 13400,
      phoneNumber: '601234567',
    },
  ];

  // returns the user's email
  getUserEmail(user: User): string {
    return user.email;
  }

  // returns user based on the provided id
  getUserById(id: number): User {
    let foundUser!: User;

    UserService.dummyUserList.forEach((user) => {
      if (user.id === id) {
        foundUser = user;
      }
    });

    this.currentUser = foundUser;

    return foundUser;
  }

  // returns user based on the provided email
  getUserByEmail(email: string): User {
    this.currentUser = UserService.dummyUserList.find(
      (user) => user.email === email
    )!;

    return this.currentUser;
  }

  // checks if the provided password is valid
  isPasswordValid(email: string, password: string): boolean {
    return (
      UserService.dummyUserList.find(
        (user) => user.email === email && user.password === password
      ) !== undefined
    );
  }

  // registers a new user
  registerUser(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    address: string,
    city: string,
    zipCode: number,
    phoneNumber: string
  ): User {
    let maxId: number = 0;

    UserService.dummyUserList.forEach((user) => {
      if (maxId < user.id) {
        maxId = user.id;
      }
    });

    let id = ++maxId;
    let user: User = {
      id,
      firstName,
      lastName,
      email,
      password,
      address,
      city,
      zipCode,
      phoneNumber,
    };

    UserService.dummyUserList.push(user);

    this.currentUser = user;

    console.log(user);
    return user;
  }
}
