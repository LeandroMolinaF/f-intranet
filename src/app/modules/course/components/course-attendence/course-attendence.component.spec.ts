import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAttendenceComponent } from './course-attendence.component';

describe('CourseAttendenceComponent', () => {
  let component: CourseAttendenceComponent;
  let fixture: ComponentFixture<CourseAttendenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseAttendenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAttendenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
