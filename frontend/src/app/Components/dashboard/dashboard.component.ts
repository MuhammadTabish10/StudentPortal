import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MenuItem, MessageService } from "primeng/api";

@Component({
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.scss"],
  providers: [MessageService],
})
export class DashboardComponent implements OnInit {
  start: boolean = true;

  //   Subject
  subjectDialog: boolean = false;
  subjectForm!: FormGroup;
  selectedSubject: any;
  //   Class
  classDialog: boolean = false;
  classForm!: FormGroup;
  settingForm!:FormGroup
  selectedClass: any;
  startingNum = 0;

  //   Semester Selected

  days: string[] = ["Mon", "Tue","Wed", "Thu", "Fri"];
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  clickedCells: { [key: string]: boolean } = {};
  clickedValues: { [key: string]: number } = {};

  onNumberClick(day: string, number: number): void {
    const key = `${day}-${number}`;
    this.clickedCells[key] = !this.clickedCells[key];
    if (this.clickedCells[key]) {
      this.clickedValues[key] = number;
    } else {
      delete this.clickedValues[key];
    }
    console.log(this.clickedValues);
  }

  isClicked(day: string, number: number): boolean {
    const key = `${day}-${number}`;
    return this.clickedCells[key] || false;
  }

  subjects: any[] = [
    { name: "English", selected: false },
    { name: "Mathematics", selected: false },
  ];

  classes: any[] = [
    { name: "4A", students: 7, selected: false },
    { name: "4B", students: 10, selected: false },
    { name: "4C", students: 12, selected: false },
  ];
  currentStepIndex = 0;

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    this.subjectForm = this.fb.group({
      courseName: [null, Validators.required],
    });
    this.classForm = this.fb.group({
      className: [null, Validators.required],
      importStudents: [false, Validators.required],
      roleAssignment: [null, Validators.required],
      students: this.fb.array([this.createStudentGroup()]),
    });
    this.settingForm = this.fb.group({
      attendence: [false, Validators.required],
      excuses: [false, Validators.required],
      oralPaticipation: [false, Validators.required],
      homeWork: [false, Validators.required],
      qyalityOfHw: [false, Validators.required],
      writtenRepetition: [false, Validators.required],
      oralExercise: [false, Validators.required],
    });
    this.start = true;
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

  onClick() {
    this.start = false;
  }

  // Subject
  toggleSubjectSelection(card: any) {
    this.subjects.forEach((c) => {
      if (c !== card) {
        c.selected = false;
      }
    });
    card.selected = !card.selected;
    this.selectedSubject = card.selected ? card : null;
  }

  // Class
  toggleClassSelection(card: any) {
    this.classes.forEach((c) => {
      if (c !== card) {
        c.selected = false;
      }
    });
    card.selected = !card.selected;
    this.selectedClass = card.selected ? card : null; // Save selected class
    console.log(this.selectedClass);
  }

  onNext() {
    if (this.startingNum < 4) {
      this.startingNum++;
    }
  }

  onBack() {
    console.log(this.startingNum);

    if (this.startingNum > 0) {
      this.startingNum--;
    } else {
      this.start = true;
    }
  }

  onAddSubject(subject: any) {
    this.subjects.push({
      name: this.subjectForm.get("courseName")?.value,
      selected: false,
    });
    this.subjectDialog = false;
  }

  onAddClass(subject: any) {
    this.classes.push({
      name: this.classForm.get("className")?.value,
      students: this.studentsArray.length,
      selected: false,
    });
    this.classDialog = false;
  }
}
