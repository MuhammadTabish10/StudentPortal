import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: "app-class-update",
  standalone: false,
  templateUrl: "./class-update.component.html",
  styleUrl: "./class-update.component.scss",
  providers: [MessageService],
})
export class ClassUpdateComponent {
  classForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  classes: any[] = [
    { name: "4A", students: 7, selected: false },
    { name: "4B", students: 10, selected: false },
    { name: "4C", students: 12, selected: false },
  ];

  ngOnInit() {

    this.classForm = this.fb.group({
      className: [null, Validators.required],
      importStudents: [false, Validators.required],
      roleAssignment: [null, Validators.required],
      students: this.fb.array([this.createStudentGroup()]),
    });
  }

  get studentsArray(): FormArray {
    return this.classForm.get("students") as FormArray;
  }

  createStudentGroup(): FormGroup {
    return this.fb.group({
      birthday: [""],
      firstname: [""],
      lastname: [""],
      emergencyNumber: [""],
    });
  }

  addInfo() {
    this.studentsArray.push(this.createStudentGroup());
  }

  onSubmit(course: any) {
    console.log(course);
  }
}
