import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/core/services/course.service';

@Component({
  selector: 'app-teacher-layout',
  templateUrl: './teacher-layout.component.html',
  styleUrls: ['./teacher-layout.component.css'],
})
export class TeacherLayoutComponent implements OnInit {
  courses: any[] = [];
  date: Date = new Date()

  isSidebarOpen = true;

  constructor(private courseService: CourseService,  private router: Router) {}

  ngOnInit(): void {
    this.getSemesterCourse();
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  getSemesterCourse() {
    this.courseService.getSemesterCourse('2025-1').subscribe({
      next: (response) => {
        this.courses = response;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  navigate(courseId: string) {
    this.router.navigate([`teacher/course/${courseId}/classes`]);;
  }
}
