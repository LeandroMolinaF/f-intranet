import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-course-attendence',
  templateUrl: './course-attendence.component.html',
  styleUrls: ['./course-attendence.component.css'],
})
export class CourseAttendenceComponent implements OnInit, OnChanges {
  asistenciaEditable: Array<{
    studentId: string;
    rut: string;
    fullName: string;
    status: boolean;
  }> = [];

  @Output() attendenceSave = new EventEmitter<any>();
  constructor() {}

  @Input() selectedClass: any;

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedClass'] && this.selectedClass.attendance?.length > 0) {
      this.asistenciaEditable = this.selectedClass.attendance.map((e: any) => ({
        studentId: e.student.id,
        rut: e.student.rut,
        fullName: e.student.fullName,
        status: this.getStatus(e.status),
      }));
    }
  }

  saveAttendance() {
    const dto = {
      classId: this.selectedClass.id,
      records: this.asistenciaEditable.map((e) => ({
        studentId: e.studentId,
        status: e.status ? 'PRESENT' : 'ABSENT',
      })),
    };
    this.attendenceSave.emit(dto);
  }

  getStatus(status: string): boolean {
    if (status == 'PRESENT') {
      return true;
    } else if (status == 'JUSTIFIED') {
      true;
    }
    return false;
  }
}
