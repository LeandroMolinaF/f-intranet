import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseClassesComponent } from './components/course-classes/course-classes.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { CourseAttendenceComponent } from './components/course-attendence/course-attendence.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateClassComponent } from '../class/create-class/create-class.component';

const routes: Routes = [
{path: ':courseId/classes', component: CourseClassesComponent, canActivate: [AuthGuard]}
];


@NgModule({
  declarations: [
    CourseClassesComponent,
    CourseAttendenceComponent,
    CreateClassComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class CourseModule { }
