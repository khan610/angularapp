import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { log } from 'util';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;
  currentClasses = {};

  constructor() { }

  ngOnInit() {

       this.users = [
        {
          firstName: 'Khan',
          lastName: 'the Great',
          age: 30,
          address: {
            street: '50 Main st',
            city: 'Boston',
            state: 'MA'
          },
          image: 'http://lorempixel.com/600/600/people/1',
          isActive: true
        },
        {
          firstName: 'Kevin',
          lastName: 'Trajko',
          age: 34,
          address: {
            street: '20 Main st',
            city: 'Lynn',
            state: 'MA'
          },
          image: 'http://lorempixel.com/600/600/people/3',
          isActive: false
        },
        {
          firstName: 'Karen',
          lastName: 'Williams',
          age: 26,
          address: {
            street: '55 Mill st',
            city: 'Miami',
            state: 'FL'
          },
          image: 'http://lorempixel.com/600/600/people/2',
          isActive: true
        }
      ];

      
      

      this.loaded = true;
       
      // this.addUser({
      //   firstName: 'David',
      //   lastName: 'Jackson',       
      // });

      // console.log('user age ' + this.users.age);
      // console.warn('user address ' + this.users[0].address.street);
      // console.error('show extended ' + this.showExtended);
      this.setCurrentClasses();
    }

    addUser(user: User) {
      this.users.push(user);
    }

    setCurrentClasses() {
      this.currentClasses = {
        'btn-success': this.enableAdd,
        'big-text': this.showExtended
      }
    }

}
