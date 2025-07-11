import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-layout',
  templateUrl: './teacher-layout.component.html',
  styleUrls: ['./teacher-layout.component.css']
})
export class TeacherLayoutComponent implements OnInit {

  isSidebarOpen = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
