import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  public name = '';
  public clickData = '';
  public isDisableFlag = false;

  constructor() {}

  ngOnInit(): void {}
  showValue() {
    this.clickData = 'User click on button';
    this.isDisableFlag = true;
    console.log('Hiii', this.name);
  }
}
