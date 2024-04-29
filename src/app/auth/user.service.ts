import { Injectable } from '@angular/core';

export interface User {
  firstName: string;
  LastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  address?: string;
  favoriteCategories?: string[];
}

@Injectable()
export class UserService {

  constructor() { }
}
