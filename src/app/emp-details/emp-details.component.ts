import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../emp-service.service';
import { EmpHttpServiceService } from '../emp-http-service.service';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css'],
})
export class EmpDetailsComponent implements OnInit {
  empD = [];
  constructor(private empservice: EmpHttpServiceService) {}

  ngOnInit(): void {
    this.empservice.getEmployee().subscribe((data) => (this.empD = data));
  }
}
