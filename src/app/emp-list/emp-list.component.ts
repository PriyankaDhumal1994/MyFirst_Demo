import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css'],
})
export class EmpListComponent implements OnInit {
  emps = [];
  constructor(private empservice: EmpServiceService) {}

  ngOnInit(): void {
    this.emps = this.empservice.getEmployees();
  }
}
