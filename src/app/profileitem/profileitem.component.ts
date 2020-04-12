import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profileitem',
  templateUrl: './profileitem.component.html',
  styleUrls: ['./profileitem.component.css'],
})
export class ProfileitemComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() Users;
}
