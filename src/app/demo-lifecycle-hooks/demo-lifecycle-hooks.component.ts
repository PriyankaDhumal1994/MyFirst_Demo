import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
} from '@angular/core';

@Component({
  selector: 'app-demo-lifecycle-hooks',
  templateUrl: './demo-lifecycle-hooks.component.html',
  styleUrls: ['./demo-lifecycle-hooks.component.css'],
})
export class DemoLifecycleHooksComponent implements OnChanges, OnInit {
  private newNumber: number;
  @Input() userName1FromParent: string;
  @Input() userName2FromParent: string;

  constructor() {
    console.log('Inside constructor');
  }

  @Input()
  set myNewNumber(number: number) {
    this.newNumber = number;
  }

  get myNewNumber() {
    return this.newNumber;
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('Inside ngOnChanges');
    const newNumberChanged: SimpleChange = changes.myNewNumber;
    // debugger;
    console.log('Previous Value: ', newNumberChanged.previousValue);
    console.log('Current Value: ', newNumberChanged.currentValue);
    this.myNewNumber = newNumberChanged.currentValue;
  }
  ngOnInit() {
    console.log('Inside ngOnInit');
    console.log('ngOnInit Value: ', this.myNewNumber);
  }

  ngDoCheck() {
    console.log('Inside ngDoCheck');
    console.log('userName1FromParent: ', this.userName1FromParent);
    console.log('userName2FromParent: ', this.userName2FromParent);
  }

  ngAfterContentInit() {
    console.log('Inside ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('inside ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('inside ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('inside ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('Component is destroyed');
  }
}
