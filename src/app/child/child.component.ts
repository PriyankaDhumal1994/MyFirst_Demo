import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() msgFromParent: string;
  @Input() msgFromParent1: string;
  constructor() {}

  ngOnInit(): void {}
}
