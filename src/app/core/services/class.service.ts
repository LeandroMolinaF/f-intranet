import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClassService {
  private readonly apiUrl = environment.apiUrl;
  private controller = 'classes';
  private controllerAtte = 'attendance'

  constructor(private http: HttpClient) {}

  getClass(courseId: string) {
    return this.http.get<any>(`${this.apiUrl}/${this.controller}/${courseId}`);
  }

  registerAttendance(dto: any){
    return this.http.post<any>(`${this.apiUrl}/${this.controllerAtte}`, dto);
  }

  createClass(data: any) {
    return this.http.post<any>(`${this.apiUrl}/${this.controller}`, data);
  }
}
