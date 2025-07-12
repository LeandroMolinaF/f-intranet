import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassService } from 'src/app/core/services/class.service';
import { CourseService } from 'src/app/core/services/course.service';

@Component({
  selector: 'app-course-classes',
  templateUrl: './course-classes.component.html',
  styleUrls: ['./course-classes.component.css'],
})
export class CourseClassesComponent implements OnInit {
  courseId: string | null = '';
  classes: any[] = [];
  students: any[] = [];
  classId!: string;
  selectedClass: [] = [];

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router,
    private classService: ClassService
  ) {}

  ngOnInit(): void {
    this.courseId = this.route.snapshot.paramMap.get('courseId');
    this.getAllClasses(this.courseId ? this.courseId : '');
  }

  getAllClasses(id: string = '') {
    this.courseService.getClassesFromCourse(id).subscribe({
      next: (response) => {
        this.classes = response;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  getStudents(id: string = '') {
    this.courseService.getStundets(id).subscribe({
      next: (response) => {
        this.students = [...response.students];
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  onAddClass(newClass: any) {
    this.classService.createClass(newClass).subscribe({
      next: (response) => {
        alert(`Nueva clase: ${response.title}`);
        this.getAllClasses(this.courseId || '');
      },
      error: (err) => console.error(err),
    });
  }

  onDeleteClass(selectedClass: any) {
    console.log(selectedClass);
  }

  attendenceSave(asistencia: any) {
    this.classService.registerAttendance(asistencia).subscribe({
      next: (response) => {
        alert('Asistencia guardada con éxito');
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  selectClass(classId: any) {
    this.classService.getClass(classId).subscribe({
      next: (response) => {
        this.selectedClass = response;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
