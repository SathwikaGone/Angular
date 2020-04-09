import { Component, OnInit, Input } from '@angular/core';
import { User } from '../User';
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

  // @Input() user: User;

  constructor() {}

  ngOnInit(): void {}
  Fname = '';
  Lname = '';
}
