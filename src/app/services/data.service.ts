import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { User } from '../models/User';


@Injectable()
export class DataService {
  users: User[];
  data: Observable<any>;

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

  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);

      setTimeout(() => {
        observer.next(2);
      }, 2000);

      setTimeout(() => {
        observer.next(3);
      }, 3000);

      setTimeout(() => {
        observer.next({name: 'Brad'});
      }, 4000);
    });

    return this.data;
  }

  getUsers(): Observable<User[]> {
    console.log('Fetching users from service...');
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}






// {
//   providedIn: 'root'
// }