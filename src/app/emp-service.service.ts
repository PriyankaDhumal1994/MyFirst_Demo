import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmpServiceService {
  employees = [
    { id: 10, name: 'Jane', age: 35 },
    { id: 20, name: 'Jack', age: 33 },
    { id: 30, name: 'Andrew', age: 28 },
    { id: 40, name: 'Anna', age: 25 },
    { id: 50, name: 'Danny', age: 28 },
  ];

  getEmployees() {
    return this.employees;
  }
}
