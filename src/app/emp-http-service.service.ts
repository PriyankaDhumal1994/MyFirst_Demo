import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './IEmployee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmpHttpServiceService {
  private url: string = '/assets/Data/employee.json';
  constructor(private http: HttpClient) {}

  getEmployee(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.url);
  }
}
