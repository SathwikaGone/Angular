import { Component, OnInit, Input } from '@angular/core';
import { User } from '../User';
import UsersServiceService from '../users-service.service';
@Component({
  selector: 'app-profiledetail',
  templateUrl: './profiledetail.component.html',
  styleUrls: ['./profiledetail.component.css'],
})
export class ProfiledetailComponent implements OnInit {
  // User = {
  //   Fname: '',
  //   Lname: '',
  // };
  Users = [];

  // @Input() user: User;

  constructor(private usersServiceService: UsersServiceService) {}

  ngOnInit() {
    console.log(this.usersServiceService.getUsers());

    this.usersServiceService.getUsers().subscribe((data) => {
      this.Users = data;
    });
    console.log(this.Users);
  }
  Fname = '';
  Lname = '';
}
