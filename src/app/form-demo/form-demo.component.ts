import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.css'],
})
export class FormDemoComponent implements OnInit {
  constructor() {}
  registerUser(frm) {
    alert(frm.form.value.uname);
    alert(frm.form.value.contact);
    alert(frm.form.value.email);
  }

  ngOnInit(): void {}
}
