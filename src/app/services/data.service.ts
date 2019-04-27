import { Injectable } from '@angular/core';
import { User } from '../models/User';


@Injectable()
export class DataService {
  users: User[];

  constructor() { 
    this.users = [
      {
        firstName: 'Khan',
        lastName: 'the Great',
        email: 'khan@gmail.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Kevin',
        lastName: 'Trajko',
        email: 'kevin@yahoo.com',
        isActive: false,
        registered: new Date('02/12/2018 06:30:00'),
        hide: true
      },
      {
        firstName: 'Karen',
        lastName: 'Williams',
        email: 'karen@gmail.com',
        isActive: true,
        registered: new Date('06/06/2018 11:30:00'),
        hide: true
      }
    ];
  }

  getUsers(): User[] {
    console.log('Fetching users from service...');
    return this.users;
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}






// {
//   providedIn: 'root'
// }