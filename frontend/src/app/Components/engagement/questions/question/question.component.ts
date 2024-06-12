import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Table } from 'primeng/table';

@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrl: "./question.component.scss",
})
export class QuestionComponent {
  data = [
    {
      id: 1,
      question: "Question 1",
      description: "Description Appears in 2 -3 Lines Dummy Text",
      type: "Number",
      isSystem: "True",
      appliesToAccount: "True",
      NoOfEevntUsed: "98",
      active: true,
      status: "Active",
    },
    {
      id: 1,
      question: "Question 2",
      description: "Description Appears in 2 -3 Lines Dummy Text",
      type: "Date",
      isSystem: "True",
      appliesToAccount: "True",
      NoOfEevntUsed: "48",
      active: false,
      status: "Inactive",
    },
  ];
  contactForm!: FormGroup;
  visible: boolean = false;
  question
  customQuestion

  options = [5, 10, 20];
  rows = 5;

  @ViewChild("filter") filter!: ElementRef;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      question: [null, Validators.required],
      customQuestion: [null, Validators.required],
    });
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }

  onCancel() {
    this.visible = false;
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, "contains");
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = "";
  }
}
