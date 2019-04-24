import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { log } from 'util';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    age: null,
    address: {
      street: '',
      city: '',
      state: ''
    }
  }
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;
  showUserForm: boolean = false;
  
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
          isActive: true,
          registered: new Date('01/02/2018 08:30:00'),
          hide: true
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
          isActive: false,
          registered: new Date('02/12/2018 06:30:00'),
          hide: true
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
          isActive: true,
          registered: new Date('06/06/2018 11:30:00'),
          hide: true
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
      
    }

    addUser(user: User) {
      this.users.push(user);
    }

    onSubmit(e: { preventDefault: () => void; }) {
      console.log(123);

      e.preventDefault();
    }

    fireEvent(e) {
      console.log(e.target.value);
      console.log(e.type);
    }

    // toggleHide(user: User) {
    //   user.hide = !user.hide;
    // }
    
}
