import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private num: number = 10;
  userName: string = 'Smith';
  isVisible: boolean = true;
  changeVisibility() {
    this.isVisible = !this.isVisible;
  }
  user = {
    name: 'Jane',
  };
  get counter() {
    return this.num;
  }

  set counter(value) {
    this.num = value;
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  updateName() {
    this.userName = 'John';
  }

  updateUser() {
    this.user.name = 'Myra';
  }
}
