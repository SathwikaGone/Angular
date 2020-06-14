import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  outputval = {
    Fname: '',
    Lname: '',
  };

  getOutputVal(value) {
    if (value) {
      this.outputval.Fname = value.Fname;
      this.outputval.Lname = value.Lname;
    }
  }
}
