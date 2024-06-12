import { Component } from '@angular/core';

@Component({
  selector: "app-course-list",
  standalone: false,
  templateUrl: "./course-list.component.html",
  styleUrl: "./course-list.component.scss",
})
export class CourseListComponent {
  courseList: any;
  options = [5, 10, 20];
  rows = 5;

  subjects: any[] = [
    {id:1, name: "English", selected: false },
    {id:2,  name: "Mathematics", selected: false },
  ];
}
