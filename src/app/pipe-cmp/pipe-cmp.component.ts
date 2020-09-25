import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-cmp',
  templateUrl: './pipe-cmp.component.html',
  styleUrls: ['./pipe-cmp.component.css'],
})
export class PipeCmpComponent implements OnInit {
  title = 'Angular in demo';
  today = new Date();
  jsonval = {
    name: 'Rox',
    age: '25',
    address: { a1: 'Mumbai', a2: 'Karnataka' },
  };

  months = [
    'Jan',
    'Feb',
    'Mar',
    'April',
    'May',
    'Jun',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];

  constructor() {}

  ngOnInit(): void {}
}
