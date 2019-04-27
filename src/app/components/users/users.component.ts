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
    email: ''
  }
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  
  constructor() { }

  ngOnInit() {

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

      
      

      this.loaded = true;
       
      // this.addUser({
      //   firstName: 'David',
      //   lastName: 'Jackson',       
      // });

      // console.log('user age ' + this.users.age);
      // console.warn('user address ' + this.users[0].address.street);
      // console.error('show extended ' + this.showExtended);
      
    }

    // addUser() {
    //   this.user.isActive = true;
    //   this.user.registered = new Date();

    //   this.users.unshift(this.user);

    //   this.user = {
    //     firstName: '',
    //     lastName: '',
    //     email: ''
    //   }

    // }

    onSubmit() {
      
    }

    

    
    
}
