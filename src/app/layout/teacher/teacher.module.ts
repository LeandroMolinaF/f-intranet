import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherLayoutComponent } from './teacher-layout/teacher-layout.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home', component: TeacherLayoutComponent, loadChildren: () => import('../../modules/home/home.module').then(m => m.HomeModule) },
  {path: 'course',component: TeacherLayoutComponent ,loadChildren: () => import('../../modules/course/course.module').then(m => m.CourseModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];


@NgModule({
  declarations: [TeacherLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes)
  ]
})
export class TeacherModule { }
