import { Component } from '@angular/core';

@Component({
  selector: "app-class-list",
  standalone: false,
  templateUrl: "./class-list.component.html",
  styleUrl: "./class-list.component.scss",
})
export class ClassListComponent {
  courseList: any;
  options = [5, 10, 20];
  rows = 5;

  classes: any[] = [
    {id:1, name: "4A", students: 7, selected: false },
    {id:2, name: "4B", students: 10, selected: false },
    {id:3, name: "4C", students: 12, selected: false },
  ];
}
