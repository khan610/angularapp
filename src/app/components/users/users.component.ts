import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;

  constructor() { }

  ngOnInit() {

       this.users = [
        {
          firstName: 'Khan',
          lastName: 'the Great',
          age: 30,
          adress: {
            street: '50 Main st',
            city: 'Boston',
            state: 'MA'
          },
          image: 'http://lorempixel.com/600/600/people/1'
        },
        {
          firstName: 'Kevin',
          lastName: 'Trajko',
          age: 34,
          adress: {
            street: '20 Main st',
            city: 'Lynn',
            state: 'MA'
          },
          image: 'http://lorempixel.com/600/600/people/3'
        },
        {
          firstName: 'Karen',
          lastName: 'Williams',
          age: 26,
          adress: {
            street: '55 Mill st',
            city: 'Miami',
            state: 'FL'
          },
          image: 'http://lorempixel.com/600/600/people/2'
        }
      ];

      this.loaded = true;
       
      // this.addUser({
      //   firstName: 'David',
      //   lastName: 'Jackson',       
      // });
    }

    addUser(user: User) {
      this.users.push(user);
    }

}
