import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../User';
import UsersServiceService from '../users-service.service';
@Component({
  selector: 'app-profiledetail',
  templateUrl: './profiledetail.component.html',
  styleUrls: ['./profiledetail.component.css'],
})
export class ProfiledetailComponent implements OnInit {
  Users = [];
  FilteredEmp;
  SearchEmp;
  Fname = '';
  Lname = '';

  @Output() dataToP = new EventEmitter<object>();

  constructor(private usersServiceService: UsersServiceService) {}

  ngOnInit() {
    this.usersServiceService.getUsers().subscribe((data) => {
      this.Users = data;
      this.FilteredEmp = data;
    });
  }

  filterEmployees() {
    this.FilteredEmp = this.Users.filter(
      (user) => user.name.toLowerCase().includes(this.SearchEmp) === true
    );
  }

  sendDataToP(Fname, Lname) {
    let obj = { Fname: Fname, Lname: Lname };
    this.dataToP.emit(obj);
  }
}
