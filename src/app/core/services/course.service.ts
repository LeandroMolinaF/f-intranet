import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private readonly apiUrl = environment.apiUrl;
  private controller = 'courses';

  constructor(private http: HttpClient) { }

  getSemesterCourse(semester: string) {
    return this.http.get<any>(`${this.apiUrl}/${this.controller}/semester/${semester}`);
  }

  getClassesFromCourse(courseId: string) {
    return this.http.get<any>(`${this.apiUrl}/${this.controller}/${courseId}/classes`);
  }

  getStundets(courseId: string) {
    return this.http.get<any>(`${this.apiUrl}/${this.controller}/${courseId}`);
  }

}
