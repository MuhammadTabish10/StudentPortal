import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';
import { DiscountListComponent } from '../../discount/discount-list/discount-list.component';
import { TicketListComponent } from '../../Ticket/ticket-list/ticket-list.component';

@Component({
  selector: "app-course-create",
  standalone: false,
  templateUrl: "./course-create.component.html",
  styleUrl: "./course-create.component.scss",
  providers:[MessageService]
})
export class CourseCreateComponent {
  courseForm!: FormGroup;



  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.courseForm = this.fb.group({
      courseName: [null, Validators.required],
    });



  }


  onSubmit(course:any) {
    console.log(course);

  }




}
