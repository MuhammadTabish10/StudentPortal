import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ChipsModule } from 'primeng/chips';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { SliderModule } from 'primeng/slider';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: "app-discount-list",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ReactiveFormsModule,
    RatingModule,
    ButtonModule,
    SliderModule,
    InputTextModule,
    ToggleButtonModule,
    RippleModule,
    MultiSelectModule,
    DropdownModule,
    ProgressBarModule,
    ToastModule,
    DialogModule,
    AutoCompleteModule,
    CalendarModule,
    ChipsModule,
    InputMaskModule,
    InputNumberModule,
    CascadeSelectModule,
    InputTextareaModule,
    RadioButtonModule,
    TooltipModule,
    DividerModule,
    BadgeModule,
    MultiSelectModule,
  ],
  templateUrl: "./discount-list.component.html",
  styleUrl: "./discount-list.component.scss",
})
export class DiscountListComponent {
  discountForm!: FormGroup;
  visible: boolean = false;
  symbol=["$","%"]
  status;
  appliesTo = ["Christmas Event", "New Year Era"];
  data = [
    {
      codeName: "PROMO01",
      description: "Appear in 2 to 3 lines",
      inDollarOrPercent: "$10.00",
      noOfReg: "100",
      revenue: "19000",
      standardRevenue: "89000",
      checkIn: "100",
      status: "Active",
    },
    {
      codeName: "STUBIFIED01",
      description: "Appear in 2 to 3 lines",
      inDollarOrPercent: "$20.00",
      noOfReg: "50",
      revenue: "49000",
      standardRevenue: "39000",
      checkIn: "300",
      status: "Completed",
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.discountForm = this.fb.group({
      codeName: [null, Validators.required],
      description: [null, Validators.required],
      symbol: [null, Validators.required],
      value: [null, Validators.required],
      appliesTo: [null, Validators.required],
      status: [null, Validators.required],
      minimumTickets: [null, Validators.required],
      maximumTickets: [null, Validators.required],
      datePairs: this.fb.array([]),
    });

    this.addDatePair();
  }

  onSubmit() {
    console.log(this.discountForm.value);
  }

  get datePairsArray(): FormArray {
    return this.discountForm.get("datePairs") as FormArray;
  }

  addDatePair() {
    const datePair = this.fb.group({
      fromDate: ["", Validators.required],
      toDate: ["", Validators.required],
    });

    this.datePairsArray.push(datePair);
  }

  removeDatePair(index: number) {
    this.datePairsArray.removeAt(index);
  }

  onCancel() {
    this.visible = false;
  }

  setVisibleValue() {
    this.visible = true;
    console.log("hello");
  }
}
