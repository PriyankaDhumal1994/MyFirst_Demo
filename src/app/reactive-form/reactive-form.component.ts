import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      uname: [
        'Priyanka',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.pattern('[a-zA-Z][a-zA-Z]*'),
        ],
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(4), Validators.maxLength(6)],
      ],
      email: ['', [Validators.required]],
    });
  }

  get uname() {
    return this.loginForm.get('uname');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get email() {
    return this.loginForm.get('email');
  }

  displayData() {
    alert(this.uname.value);
    alert(this.password.value);
    alert(this.email.value);
  }
  ngOnInit(): void {}
}
