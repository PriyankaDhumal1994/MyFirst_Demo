import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
})
export class Child2Component implements OnInit {
  msg = 'msg from child2';
  @Output() childEvent = new EventEmitter();

  eventHandler() {
    this.childEvent.emit(this.msg);
  }
  constructor() {}

  ngOnInit(): void {}
}
